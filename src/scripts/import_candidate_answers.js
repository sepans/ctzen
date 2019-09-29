'use strict'

const fs = require('fs')
const path = require('path')
const { db } = require('../server/models')

// !!!!!!! important
const DELETE_ANSWERS = false
let file = '../../data/09_09_19/warren.json'
let candidateName = 'Elizabeth Warren'
/*
 names in db:
Joe Biden
node import_candidate_answers.js ../../data/09_09_19/biden.json 'Joe Biden'
Pete Buttigieg
node import_candidate_answers.js ../../data/09_09_19/buttigieg.json 'Pete Buttigieg'
Kamala Harris
 node import_candidate_answers.js ../../data/09_09_19/harris.json 'Kamala Harris'
Bernie Sanders
node import_candidate_answers.js ../../data/09_09_19/sanders.json 'Bernie Sanders'
Elizabeth Warren

 Julian Castro
 Amy Klobuchar
 Beto O'Rourke
 Michael Bennet
 Cory Booker
 Tulsi Gabbard
 Andrew Yang
 Bill de Blasio
*/

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
  console.error(`adding answer to candidate ${candidate.displayName}`)
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
      through: {
        response: parseInt(answer.Answer - 1),
        comment: answer.Comment,
        source: answer.Source,
      },
    })
  })
}

if (process.argv.length !== 4) {
  console.log(
    "Usage:  node import_candidate_answers.js ../../data/09_09_19/warren.json 'Elizabeth Warren'"
  )
  process.exit(-1)
}

file = process.argv[2]
candidateName = process.argv[3]

console.log(`Imporing file ${file} for ${candidateName}`)

const qs = loadJSON(file)
if (DELETE_ANSWERS) {
  emptyTable()
}
saveAnswers(qs)
