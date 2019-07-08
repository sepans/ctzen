import React, { useState } from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer, commitMutation } from 'react-relay';
import { PageWrapper, Text, Button } from '../components/Layout';
import { Box } from "@smooth-ui/core-sc"
import { Responses_me } from "./__generated__/Responses_me.graphql"
import { optionArray } from '../components/helpers/question_helpers';
import styled from 'styled-components';

interface Props {
  me: Responses_me
}

const Responses: React.FC<Props> = ({ me }) => {
  const responses = me.answers && me.answers.map(answer => {
    if(!answer || !answer.UserResponse) 
      return
    const pick = answer.UserResponse.response || 0
    const pickText = optionArray(answer)[pick]

    return answer && (
      <tr>
        <td>
          <Text type="primary">{answer.title}</Text>
        </td>
        <td>
          <Text>{pickText}</Text>
        </td>
        <td>
          <Link to={`/question/${answer.id}`}>
            <Button>Edit</Button>
          </Link>
        </td >
      </tr>
    )
  })

  return (
    <PageWrapper>
      <ResponseTable>
        {responses}
      </ResponseTable>
    </PageWrapper>
  )
}

const ResponseTable = styled.table`
`

export default createFragmentContainer(
  Responses, {
    me: graphql`
    fragment Responses_me on User {
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
  `}
)