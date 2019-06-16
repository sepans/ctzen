const { db } = require('./')

describe("test sequelize", () => {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  if (process.env.NODE_ENV!=='test') {
    return
  }
  beforeEach(async (done) => {
    await db.Candidate.destroy(({ where: {}, force: true }))
    await db.CandidateResponse.destroy(({ where: {}, force: true }))
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

  xit("create and retrieve user and responses", async (done) => {
    expect.assertions(3)
    const candidate = await db.Candidate.create({ name: 'barack obama' })
    const q = await db.Question.create({
      title: 'what is you name?',
      option1: 'barack',
      option2: 'hussain',
      option3: 'obama',
    })

    await candidate.addQuestion(q, { through: { response: 1 } })

    const candidates = await db.Candidate.findAll({
      include: [{
        model: db.Question
      }]
    })

    expect(candidates.length).toBe(1)

    const candidateQuestions = await candidates[0].getQuestions()
    const pickIndex = candidateQuestions[0].CandidateResponse.response
    const options = [candidateQuestions[0].option1, candidateQuestions[0].option3, candidateQuestions[0].option3]
    const pick = options[pickIndex - 1]
    console.log('first question: ', candidateQuestions[0].title, ' answer: ', pick)

    expect(pickIndex).toBe(1)
    expect(candidateQuestions[0].title).toContain('what is you name?')

    done()
  })

})