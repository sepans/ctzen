import React, { useState } from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer, commitMutation } from 'react-relay'
import { PageWrapper, Title, Button } from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { Question_question } from './__generated__/Question_question.graphql'
import { Question_me } from './__generated__/Question_me.graphql'
import environment from '../config/relayEnvironment'
import { optionArray } from '../components/helpers/question_helpers'

interface Props {
  question: Question_question
  me: Question_me
  router: any
}

const mutation = graphql`
  mutation Question_userAnswer_Mutation($questionId: ID!, $response: Int) {
    userAnswerQuestion(questionId: $questionId, response: $response) {
      user {
        answers {
          title
          level
          UserResponse {
            response
          }
        }
      }
      nextQuestion {
        id
      }
    }
  }
`

const NUMBER_OF_OPTIONS = 5
const MATCH_SCORE_THRESHOLD = 0.5

const Question: React.FC<Props> = ({ question, me, router }) => {
  const [selection, setSelection] = useState(-1)
  const { title } = question

  const nextQuestionLink = questionId => `/question/${questionId}`

  const submitSelection = () => {
    const variables = {
      questionId: parseInt(question.id as string),
      response: selection,
    }
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        const { nextQuestion } = response.userAnswerQuestion
        router.replace(nextQuestionLink(nextQuestion.id))
      },
      onError: err => console.error(err),
    })
  }
  const buttonClick = i => {
    if (selection !== i) {
      setSelection(i)
    }
  }

  const options = optionArray(question).map((option, i) => {
    const selected = i === selection
    return (
      <Box key={i} width={{ xs: 1, md: 0.5, lg: 0.33, xl: 0.2 }} pr={1} py={1}>
        <Button
          width="100%"
          py={1}
          onClick={() => buttonClick(i)}
          type={selected ? 'selected' : 'answer'}
        >
          {option}
        </Button>
      </Box>
    )
  })

  const showNext = selection !== -1

  const hasAnswers = me.user && me.user.answers && me.user.answers.length

  const topScores: (number)[] =
    (me &&
      me.matchingCandidates &&
      me.matchingCandidates.length &&
      me.matchingCandidates[0] &&
      me.matchingCandidates.map(match => (match && match.score) || 0)) ||
    []

  const hasMatches =
    topScores && topScores.length && topScores[0] > MATCH_SCORE_THRESHOLD

  const buttonSection = (
    <>
      <Box mt={2} display="flex" justifyContent="space-between">
        <>
          {hasAnswers && (
            <Link to="/responses">
              <Button>View answers</Button>
            </Link>
          )}
          {hasMatches && (
            <Link to="/candidates">
              <Button>Show candidate matches</Button>
            </Link>
          )}
          {showNext && <Button onClick={submitSelection}>Next ></Button>}
        </>
      </Box>
    </>
  )

  // const topMatches = me && me.matchingCandidates
  // const topMatchItems =
  //   topMatches &&
  //   topMatches.map(
  //     (topMatch, i) =>
  //       topMatch &&
  //       topMatch.score && (
  //         <Box mx={1} key={i}>
  //           <strong>{Math.round(topMatch.score * 100)}%</strong> with{' '}
  //           <strong>
  //             {topMatch && topMatch.candidate && topMatch.candidate.name}
  //           </strong>
  //         </Box>
  //       )
  //   )

  return (
    <PageWrapper>
      <Box mb={1} display="flex" flexWrap="wrap">
        <Box mr={1}>Your candidate matches: </Box>
        {/*topMatchItems*/}
      </Box>
      <Title>{title}</Title>
      <Box my={3}>
        <Box my={4} display="flex" flexWrap="wrap" justifyContent="start">
          {options}
        </Box>
        {buttonSection}
      </Box>
    </PageWrapper>
  )
}

export default createFragmentContainer(Question, {
  question: graphql`
    fragment Question_question on Question {
      id
      title
      level
      option1
      option2
      option3
      option4
      option5
    }
  `,
  me: graphql`
    fragment Question_me on UserInfo {
      matchingCandidates {
        score
        candidate {
          name: displayName
        }
      }
      user {
        answers {
          id
        }
      }
    }
  `,
})
