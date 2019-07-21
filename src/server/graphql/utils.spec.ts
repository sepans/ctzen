const { answersToVector } = require('./utils')

describe('answersToVector', () => {
  it('turns an array of answers to vector', () => {
    const questionIds = ['1', '2', '3', '4', '5']
    const userAnswers = [
      { importId: '2', UserResponse: { response: 3 } },
      { importId: '4', UserResponse: { response: 1 } },
      { importId: '5', UserResponse: { response: 4 } },
    ]
    const candidateAnswers = [
      { importId: '2', CandidateResponse: { response: 3 } },
      { importId: '4', CandidateResponse: { response: 1 } },
      { importId: '5', CandidateResponse: { response: 4 } },
    ]
    const userVector = answersToVector(userAnswers, questionIds)
    expect(userVector).toEqual([0, 3, 0, 1, 4])

    const candidateVector = answersToVector(candidateAnswers, questionIds)
    expect(candidateVector).toEqual([0, 3, 0, 1, 4])
  })
})
