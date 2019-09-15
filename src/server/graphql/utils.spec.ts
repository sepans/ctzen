const {
  answersToVector,
  matchCandidateVectorWithUser,
  VECTOR_UNDEFINED_VALUE,
  calculateSimilarity,
} = require('./utils')

describe('answersToVector', () => {
  it('turns an array of answers to vector', () => {
    const questionIds = ['1', '2', '3', '4', '5', '6']
    const userAnswers = [
      { importId: '2', UserResponse: { response: 3 } },
      { importId: '4', UserResponse: { response: 1 } },
      { importId: '5', UserResponse: { response: 4 } },
    ]
    const candidateAnswers = [
      { importId: '1', CandidateResponse: { response: 3 } },
      { importId: '3', CandidateResponse: { response: 1 } },
      { importId: '4', CandidateResponse: { response: 1 } },
      { importId: '6', CandidateResponse: { response: 4 } },
    ]
    const userVector = answersToVector(userAnswers, questionIds)
    expect(userVector).toEqual([0, 3, 0, 1, 4, 0])

    const candidateVector = answersToVector(candidateAnswers, questionIds)
    expect(candidateVector).toEqual([3, 0, 1, 1, 0, 4])
  })
})

describe('matchCandidateVectorWithUser', () => {
  const userVector = [
    VECTOR_UNDEFINED_VALUE,
    VECTOR_UNDEFINED_VALUE,
    1,
    VECTOR_UNDEFINED_VALUE,
    3,
    2,
    VECTOR_UNDEFINED_VALUE,
  ]
  const candidateVector = [3, 4, 2, 4, 4, 2, 3]

  it('removes undefined values and matches the dimensions', () => {
    const matchedVectors = matchCandidateVectorWithUser(
      userVector,
      candidateVector
    )
    expect(matchedVectors.user).toEqual([1, 3, 2])
    expect(matchedVectors.candidate).toEqual([2, 4, 2])
  })
})

describe('calculateSimilarity', () => {
  const userVector = [
    VECTOR_UNDEFINED_VALUE,
    3,
    1,
    VECTOR_UNDEFINED_VALUE,
    3,
    2,
    VECTOR_UNDEFINED_VALUE,
  ]
  const candidate1 = [4, 2, 1, 3, 2, 4, 5]
  const candidate2 = [3, 1, 4, 2, 1, 4, 4]
  const candidate3 = [4, 3, 1, 3, 2, 4, 5]
  const candidate4 = [1, 3, 1, 5, 2, 4, 5]
  const candidate5 = [1, 3, 1, 5, 3, 2, 5]
  const withCandidate1 = calculateSimilarity(userVector, candidate1)
  const withCandidate2 = calculateSimilarity(userVector, candidate2)
  const withCandidate3 = calculateSimilarity(userVector, candidate3)
  const withCandidate4 = calculateSimilarity(userVector, candidate4)
  const withCandidate5 = calculateSimilarity(userVector, candidate5)

  it('candidate with more similar answers gets higher score', () => {
    expect(withCandidate1).toBeGreaterThan(withCandidate2)
  })
  it('candidate with even more similar answers gets evne higher score', () => {
    expect(withCandidate3).toBeGreaterThan(withCandidate1)
  })
  it('candidate with different answers on questions which user has not answered gets the same score', () => {
    expect(withCandidate4).toEqual(withCandidate3)
  })
  it('candidate with all matching answers gets full score', () => {
    expect(Math.round(withCandidate5 * 1000) / 1000).toEqual(1)
  })
})
