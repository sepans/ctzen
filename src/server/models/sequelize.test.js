const { db } = require('./')

describe("test sequelize", () => {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  if (process.env.NODE_ENV!=='test') {
    return
  }
  beforeEach(async (done) => {
    await db.Candidate.destroy(({ where: {}, force: true }))
    await db.CandidateResponse.destroy(({ where: {}, force: true }))
    await db.User.destroy(({ where: {}, force: true }))
    await db.UserResponse.destroy(({ where: {}, force: true }))
    await db.Question.destroy(({ where: {}, force: true }))
    done()
  })
  afterAll(() => {
    db.close()
  })
  it("create and retrieve candidate and responses", async (done) => {
      expect.assertions(3)
      const candidate = await db.Candidate.create({name: 'barack obama'})
      const q = await db.Question.create({
        title: 'what is you name?',
        option1: 'barack',
        option2: 'hussain',
        option3: 'obama',
      })

      await candidate.addAnswer(q, {through: {response: 1}})

      const candidates = await db.Candidate.findAll({
        include: [{
          model: db.Question,
          as: 'answers'
        }]
      })
      
      expect(candidates.length).toBe(1)

      const candidateAnswers =  await candidates[0].getAnswers()
      const pickIndex = candidateAnswers[0].CandidateResponse.response
      const options = [candidateAnswers[0].option1, candidateAnswers[0].option3, candidateAnswers[0].option3]
      const pick = options[pickIndex - 1]
      console.log('first question: ', candidateAnswers[0].title, ' answer: ', pick)

      expect(pickIndex).toBe(1)
      expect(candidateAnswers[0].title).toContain('what is you name?')

      done()
  })

  it("create and retrieve user and responses", async (done) => {
    expect.assertions(3)
    const user = await db.User.create({ username: 'barackobama2000', email: 'barackobama.aol.com' })
    const q = await db.Question.create({
      title: 'what is you name?',
      option1: 'barack',
      option2: 'hussain',
      option3: 'obama',
    })

    await user.addAnswer(q, { through: { response: 3 } })

    const users = await db.User.findAll({
      include: [{
        model: db.Question,
        as: 'answers'
      }]
    })

    expect(users.length).toBe(1)

    const userAnswers = await users[0].getAnswers()
    const pickIndex = userAnswers[0].UserResponse.response
    const options = [userAnswers[0].option1, userAnswers[0].option3, userAnswers[0].option3]
    const pick = options[pickIndex - 1]
    console.log('first question: ', userAnswers[0].title, ' answer: ', pick)

    expect(pickIndex).toBe(3)
    expect(userAnswers[0].title).toContain('what is you name?')

    done()
  })

})