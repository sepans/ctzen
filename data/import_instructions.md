
### Import questions
Steps:

1. Download questions or candidate answers as tsv file
2. convert tsv files to json using jq (`brew install qj`) and `tsv2json.jq`:
  ```
  jq -R -s -f ../tsv2json.jq Candidate_Research_2.0_Questions.tsv > questions.json
  ```
3. Make sure the field names match the one in `import_questions.js` (`importId`, `question`, `level` etc.)
4. **IMPORTANT** before running import script check you have correct values for `DELETE_QUESTIONS` (it removes all data from the questions table) and `file` (filename)
5. run import `node ./src/scripts/import_questions.js`
6. check values in db:
   1. connect to db: `psql -d ctizen_development`
   2. `select * from "Questions" limit 5;`
7. Currently deleting questions doesn't cascade to delete UserResponse and CandidateResponse. Do it manually:
   1. `delete from "UserResponses";`
   2. `delete from "CandidateResponses";` (`import_candidate_answers` script also d )

### Import candidate answers
1. Steps 1-3 are the same.
2. **IMPORTANT** similarly check for `DELETE_ANSWERS` (most likely needs to be false. it deletes all candidate answers)
3. Run: `node import_candidate_answers.js ../../data/09_09_19/warren.json 'Elizabeth Warren'`