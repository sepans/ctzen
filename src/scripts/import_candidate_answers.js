'use strict'

const fs = require('fs')
const path = require('path')
const { db } = require('../server/models')

const DELETE_ANSWERS = true

const file = "../../data/biden_answers.json"
const candidateName = "Joe Biden"


const loadJSON = (filePath) => {

  const filename = path.join(__dirname, filePath)

  let raw = fs.readFileSync(filename)
  return JSON.parse(raw)
}

const emptyTable = async () => {
  const qi = db.getQueryInterface()
  await qi.bulkDelete("CandidateResponses")

}

const saveAnswers = async (answers) => {
  const candidate = await db.Candidate.findOne({
    where: {
      displayName: candidateName
    }
  })
  if(!candidate) {
    console.error(`candidate ${candidateName} not found`)
    return
  }
  answers.forEach(async (answer) => {
    const q = await db.Question.findOne({
      where: {
        importId: answer.id
      }
    })
    if (!q) {
      console.error(`question ${q.id} not found`)
      return
    }
    
    await candidate.addAnswer(q, { through: { response: parseInt(answer.selected_option -1) } })

  })

  
}



const qs = loadJSON(file)
if (DELETE_ANSWERS) {
  emptyTable()
}
saveAnswers(qs)


