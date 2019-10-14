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

interface Props {
  me: Responses_me
}

const Responses: React.FC<Props> = ({ me }) => {
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

  const nextQuestion = me.nextQuestion && me.nextQuestion.id

  const respondQuestions = nextQuestion && (
    <Link to={`/question/${nextQuestion}`}>
      <Button>
        {responses ? 'continue ' : 'Start'} responding to questions
      </Button>
    </Link>
  )

  /*
  return <WrapperWithFooter
    header={(
      <>
        <CandidateInfo candidate={candidate} />
        <Categories categories={categories} selected="Economy" />
      </>
    )}
    footer={<FooterNav selectedNav="candidate" />}>
      <Box>
        {answers}
      </Box>
    </WrapperWithFooter>
}
  */
  return (
    <WrapperWithFooter footer={<FooterNav selectedNav="me" />}>
      <Box p={4}>
        <Box py={1} justifyContent="center" display="flex">
          {respondQuestions}
        </Box>
        <Box>{responses}</Box>
      </Box>
    </WrapperWithFooter>
  )
}

export default createFragmentContainer(Responses, {
  me: graphql`
    fragment Responses_me on UserInfo {
      user {
        id
        answers {
          UserResponse {
            response
          }
          title
          id
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
})
