import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay'
import {
  WrapperWithFooter,
  Text,
  Button,
  QuestionBox,
} from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { Responses_me } from './__generated__/Responses_me.graphql'
import { optionArray } from '../components/helpers/question_helpers'
import { FooterNav } from '../components/FooterNav'
import { Responses_questions } from './__generated__/Responses_questions.graphql'
import styled from 'styled-components'

interface Props {
  me: Responses_me
  questions: Responses_questions
}

const Responses: React.FC<Props> = ({ me, questions }) => {
  console.log(questions)
  const answers = me.user && me.user.answers
  const responses =
    answers &&
    answers.length > 0 &&
    answers.map(answer => {
      if (!answer || !answer.UserResponse) return null
      const pick = answer.UserResponse.response || 0
      const pickOption = optionArray(answer).find(
        option => option.index === pick
      )
      const pickText = pickOption!.text

      return (
        answer && (
          <QuestionBox>
            <Link to={`/question/${answer.id}`}>
              <Box>
                <Text type="primary">{answer.title}</Text>
              </Box>
              <Box my={1}>
                <Text>{pickText}</Text>
              </Box>
            </Link>
          </QuestionBox>
        )
      )
    })

  const questionItems =
    questions &&
    questions.map(question => {
      const sameAnswer = answers!.find(answer => answer!.id === question.id)
      return (
        !sameAnswer && (
          <QuestionBox>
            <Link to={`/question/${question.id}`}>
              <Box>
                <Text type="primary">{question.title}</Text>
              </Box>
              <Box
                p={2}
                my={2}
                backgroundColor={'#F4F5F8'}
                color={'#A4A4A4'}
                border={'1px dashed #A4A4A4'}
              >
                <Text>Add Answer</Text>
              </Box>
            </Link>
          </QuestionBox>
        )
      )
    })

  const nextQuestion = me.nextQuestion && me.nextQuestion.id

  const respondQuestions = nextQuestion && (
    <Link to={`/question/${nextQuestion}`}>
      <Button>
        {responses ? 'continue ' : 'Start'} responding to questions
      </Button>
    </Link>
  )

  return (
    <WrapperWithFooter footer={<FooterNav selectedNav="me" />}>
      <Box p={4}>
        <Box py={1} justifyContent="center" display="flex">
          {respondQuestions}
        </Box>
        <Box>{responses}</Box>
        <Box>{questionItems}</Box>
      </Box>
    </WrapperWithFooter>
  )
}

// TODO: move color to theme
// const AddAnswer = <Box></Box>
//   background-color: #F4F5F8;
//   color: #A4A4A4;
//   border: 1px dotted #A4A4A4;
// `

export default createFragmentContainer(Responses, {
  me: graphql`
    fragment Responses_me on UserInfo {
      user {
        id
        answers {
          UserResponse {
            response
          }
          id
          title
          option1
          option2
          option3
          option4
          option5
        }
      }
      nextQuestion {
        id
      }
    }
  `,
  questions: graphql`
    fragment Responses_questions on Question @relay(plural: true) {
      id
      title
      option1
      option2
      option3
      option4
      option5
    }
  `,
})
