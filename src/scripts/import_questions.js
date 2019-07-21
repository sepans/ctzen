'use strict'

const fs = require('fs')
const path = require('path')
const { db } = require('../server/models')

const DELETE_QUESTIONS = true

const file = '../../data/questions_econ.json'

const loadJSON = filePath => {
  const filename = path.join(__dirname, filePath)

  let raw = fs.readFileSync(filename)
  return JSON.parse(raw)
}

const emptyTable = async () => {
  const qi = db.getQueryInterface()
  await qi.bulkDelete('Questions')
}

const saveQuestions = async questions => {
  const qi = db.getQueryInterface()
  const noParent = questions.map(q => {
    const {
      importId,
      question,
      option1,
      option2,
      option3,
      option4,
      option5,
      level,
    } = q
    return {
      importId,
      title: question,
      option1,
      option2,
      option3,
      option4,
      option5,
      createdAt: new Date(),
      updatedAt: new Date(),
      level,
    }
  })
  await qi.bulkInsert('Questions', noParent)

  addRelations(questions)
}

const addRelations = async questions => {
  questions.forEach(async question => {
    if (question.parent) {
      const child = await db.Question.findOne({
        where: {
          importId: question.importId,
        },
      })
      const parent = await db.Question.findOne({
        where: {
          importId: question.parent,
        },
      })
      if (!child) {
        console.error(`question ${question.importId} not found`)
        return
      }
      if (!parent) {
        console.error(`parent question ${question.parent} not found`)
        return
      }
      await parent.addChildren(child)
    }
  })
}

const qs = loadJSON(file)
if (DELETE_QUESTIONS) {
  emptyTable()
}
saveQuestions(qs)
