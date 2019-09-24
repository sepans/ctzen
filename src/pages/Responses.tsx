import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay'
import { PageWrapper, Text, Button } from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { Responses_me } from './__generated__/Responses_me.graphql'
import { optionArray } from '../components/helpers/question_helpers'

interface Props {
  me: Responses_me
}

const Responses: React.FC<Props> = ({ me }) => {
  const responses =
    me.user &&
    me.user.answers &&
    me.user.answers.map(answer => {
      console.log(answer)
      if (!answer || !answer.UserResponse) return null
      const pick = answer.UserResponse.response || 0
      const pickText = optionArray(answer)[pick]

      return (
        answer && (
          <Box my={2} borderBottom="1px solid #EEE">
            <Box>
              <Text type="primary">{answer.title}</Text>
            </Box>
            <Box my={1} display="flex" justifyContent="space-between">
              <Text>{pickText}</Text>
              <Link to={`/question/${answer.id}`}>
                <Button>Edit</Button>
              </Link>
            </Box>
          </Box>
        )
      )
    })

  return (
    <PageWrapper>
      <Box>{responses}</Box>
    </PageWrapper>
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
    }
  `,
})
