'use strict'

const fs = require('fs')
const path = require('path')
const { db } = require('../server/models')

// !!!!!!! important
const DELETE_ANSWERS = false
const file = '../../data/09_09_19/warren.json'
const candidateName = 'Elizabeth Warren'

const loadJSON = filePath => {
  const filename = path.join(__dirname, filePath)

  let raw = fs.readFileSync(filename)
  return JSON.parse(raw)
}

const emptyTable = async () => {
  const qi = db.getQueryInterface()
  await qi.bulkDelete('CandidateResponses')
}

const saveAnswers = async answers => {
  const candidate = await db.Candidate.findOne({
    where: {
      displayName: candidateName,
    },
  })
  if (!candidate) {
    console.error(`candidate ${candidateName} not found`)
    return
  }
  answers.forEach(async answer => {
    console.log('ANSWER ====> ', answer)
    const q = await db.Question.findOne({
      where: {
        importId: answer.importId,
      },
    })
    if (!q) {
      console.error(`question ${q.id} not found`)
      return
    }

    await candidate.addAnswer(q, {
      through: { response: parseInt(answer.Answer - 1) },
    })
  })
}

const qs = loadJSON(file)
if (DELETE_ANSWERS) {
  emptyTable()
}
saveAnswers(qs)
