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

const MATCH_SCORE_THRESHOLD = 0.7

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

  const options = optionArray(question).map(option => {
    const selected = option.index === selection
    return (
      <Box
        key={option.index}
        width={{ xs: 1, md: 0.5, lg: 0.33, xl: 0.2 }}
        pr={1}
        py={1}
      >
        <Button
          width="100%"
          py={1}
          onClick={() => buttonClick(option.index)}
          type={selected ? 'selected' : 'answer'}
        >
          {option.text}
        </Button>
      </Box>
    )
  })

  const showNext = selection !== -1

  const hasAnswers = me.user && me.user.answers && me.user.answers.length > 0

  const topScores: (number)[] =
    (me &&
      me.matchingCandidates &&
      me.matchingCandidates.length > 0 &&
      me.matchingCandidates[0] &&
      me.matchingCandidates.map(match => (match && match.score) || 0)) ||
    []

  const hasMatches =
    topScores && topScores[0] && topScores[0] > MATCH_SCORE_THRESHOLD

  const buttonSection = (
    <>
      <Box mt={2} display="flex" flexDirection="column">
        <>
          <Box pb={3} justifyContent="right">
            <Button width="100%" onClick={submitSelection} disabled={!showNext}>
              Next >
            </Button>
          </Box>
          <Box display="flex" justifyContent="space-between">
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
          </Box>
        </>
      </Box>
    </>
  )

  return (
    <PageWrapper>
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
