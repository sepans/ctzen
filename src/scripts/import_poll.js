'use strict'

const fs = require('fs')
const path = require('path')
const { db } = require('../server/models')

const file = '../../data/polls-7-10-19.json'

const loadJSON = filePath => {
  const filename = path.join(__dirname, filePath)

  let raw = fs.readFileSync(filename)
  return JSON.parse(raw)
}

const savePolls = async polls => {
  for (const poll of polls) {
    const candidateName = poll.name
    const candidate = await db.Candidate.findOne({
      where: {
        displayName: candidateName,
      },
    })
    if (!candidate) {
      console.error(`candidate ${candidateName} not found`)
      return
    }
    let pollNumber
    try {
      pollNumber = parseInt(poll.all === '*' ? 0 : poll.all)
    } catch (e) {
      console.error(
        `invalid candidate ${candidateName} poll number ${poll.all}`
      )
    }

    await candidate.set('latestPoll', pollNumber)
    await candidate.save()
  }
}

const qs = loadJSON(file)

savePolls(qs)
