
# CTZEN

Find your election candidate match: http://ctzen.info/

<img width="281" alt="Screen Shot 2020-05-11 at 11 44 42 AM" src="https://user-images.githubusercontent.com/687513/81587682-fa224880-937c-11ea-9be5-c931a6834aa8.png">

## Setup

- `yarn install`
- `yarn run sequelize db:create`
- `yarn run sequelize db:migrate`
- `yarn run sequelize db:seed:all`
- Add polls: `node ./src/scripts/import_poll.js` (update src to latest)
- Add candidate answers (optional): `node ./src/scripts/import_candidate_answers.js` (for candidate responses in `/data` folder)
- `yarn run start` (will start graphql api and front end)

## Tests

- first time running tests setup test database:
  1. `yarn run sequelize db:create  --env=test`
  2. `yarn run sequelize db:migrate  --env=test`
- `yarn run test`

debugging tests: run `yarn run test:debug` and add `debugger` in code or breakpoint in vscode (using vscode you must run test from vscode terminal)
