import React, { useState } from 'react'
import { graphql, createFragmentContainer, commitMutation } from 'react-relay'
import {
  Title,
  Button,
  WrapperWithFooter,
  CandidateImage,
  Text,
} from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { Question_question } from './__generated__/Question_question.graphql'
import { Question_me } from './__generated__/Question_me.graphql'
import environment from '../config/relayEnvironment'
import {
  optionArray,
  mapCategoryName,
} from '../components/helpers/question_helpers'
import { Categories } from '../components/Categories'

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
const MIN_ANSWERS_TO_SHOW_MATCH = 4

const Question: React.FC<Props> = ({ question, me, router }) => {
  const [selection, setSelection] = useState(-1)
  const [finishedQuestions, setFinishedQuestions] = useState(false)
  const { title, category } = question

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
        if (nextQuestion) {
          router.replace(nextQuestionLink(nextQuestion.id))
        } else {
          setFinishedQuestions(true)
        }
      },
      onError: err => console.error(err),
    })
  }
  const buttonClick = i => {
    if (selection !== i) {
      setSelection(i)
    }
  }

  const skipQuestion = () => {
    return null
  }

  const answers = (me.user && me.user.answers && me.user.answers) || []
  const hasAnswers = answers.length > 0
  const thisQuestionAnswer = answers.find(answer => answer!.id === question.id)
  const thisQuestionResponse =
    (thisQuestionAnswer &&
      thisQuestionAnswer.UserResponse &&
      thisQuestionAnswer!.UserResponse!.response) ||
    -1
  console.log(thisQuestionAnswer, thisQuestionResponse)

  if (thisQuestionResponse > -1 && selection === -1) {
    setSelection(thisQuestionResponse)
  }

  const options = optionArray(question).map(option => {
    const selected = option.index === selection
    return (
      <Box
        key={option.index}
        width={{ xs: 1, md: 1, lg: 0.5, xl: 0.5 }}
        pr={1}
        py={1}
        display="flex"
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

  const hasMoreQuestions = () => me.nextQuestion

  const showNext = selection !== -1

  const topMatches = me && me.matchingCandidates

  const topMatch = topMatches && topMatches[0]

  const topScores: (number)[] =
    (topMatches &&
      topMatches.length > 0 &&
      topMatches.map(match => (match && match.score) || 0)) ||
    []

  const hasMatches =
    topScores && topScores[0] && topScores[0] > MATCH_SCORE_THRESHOLD

  const showMatches = hasMatches && answers.length > MIN_ANSWERS_TO_SHOW_MATCH

  // const nextQuestionsExceptCurrent = me.nextQuestions && me.nextQuestions.filter(q => q!.id !== question.id) || []
  // const canSkip = nextQuestionsExceptCurrent.length > 0
  // const skipQuestionId = nextQuestionsExceptCurrent[0]!.id

  const buttonSection = (
    <>
      <Box mt={2} display="flex" flexDirection="column">
        <>
          <Button
            p={2}
            mb={4}
            width={'100%'}
            onClick={() => {
              router.replace('/candidates')
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>Your top match so far:</Box>{' '}
              {showMatches ? (
                <CandidateImage img={topMatch!.candidate!.image || ''} />
              ) : (
                '?'
              )}
            </Box>
          </Button>

          <Box display="flex" justifyContent="space-between">
            <Button
              width="50%"
              disabled={!hasAnswers}
              mr={1}
              onClick={() => {
                router.replace('/responses')
              }}
            >
              You
            </Button>
            <Button
              width={'50%'}
              ml={1}
              onClick={submitSelection}
              disabled={!showNext || finishedQuestions}
            >
              Submit
            </Button>
          </Box>
        </>
      </Box>
    </>
  )

  return (
    <WrapperWithFooter
      header={
        <>
          <Categories selected={mapCategoryName(category)} />
        </>
      }
    >
      <Box p={4} display="flex" flexDirection="column" height="100%">
        {!finishedQuestions ? (
          <QuestionContainer>
            <Title>{title}</Title>
            <Box my={3}>
              <Box my={4} display="flex" flexWrap="wrap" justifyContent="start">
                {options}
              </Box>
            </Box>
          </QuestionContainer>
        ) : (
          <Box flex="1" pt={4} textAlign="center">
            <Title type="primary" block>
              🎉 You have answered to all questions.{' '}
            </Title>
            <Text>Check out your candidate matches!</Text>
          </Box>
        )}
        <ButtonsContainer>{buttonSection}</ButtonsContainer>
      </Box>
    </WrapperWithFooter>
  )
}

const QuestionContainer = ({ children }) => <Box flex="1">{children}</Box>

const ButtonsContainer = ({ children }) => <Box>{children}</Box>

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
      category
      subcategory
    }
  `,
  me: graphql`
    fragment Question_me on UserInfo {
      matchingCandidates {
        score
        candidate {
          name: displayName
          image
        }
      }
      nextQuestion {
        id
      }
      user {
        answers {
          id
          UserResponse {
            response
          }
        }
      }
    }
  `,
})
