import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { WrapperWithFooter, Text } from '../components/Layout'
import CandidateInfo from '../components/CandidateInfo'
import { CandidatePosition_candidate } from './__generated__/CandidatePosition_candidate.graphql'
import { Box } from '@smooth-ui/core-sc'
import { Categories } from '../components/Categories'
import { FooterNav } from '../components/FooterNav'
import { optionArray } from '../components/helpers/question_helpers'
import { Link } from 'found'

interface Props {
  candidate: CandidatePosition_candidate
}

const CandidatePosition: React.FC<Props> = ({ candidate }) => {
  const answers =
    candidate.answers &&
    candidate.answers.map((answer, i) => {
      if (!answer) {
        return null
      }
      const pick =
        (answer.CandidateResponse && answer.CandidateResponse.response) || 0
      const pickText = optionArray(answer)[pick]
      return (
        <Link key={i} to={`/comments/${candidate.id}/${answer.id}`}>
          <Box py={2} px={3} borderBottom="1px solid #AAA">
            <Text block>{answer.title}</Text>
            <Text color="green">{pickText}</Text>
          </Box>
        </Link>
      )
    })

  return (
    <WrapperWithFooter
      header={
        <>
          <CandidateInfo candidate={candidate} />
          <Categories selected="Economy" />
        </>
      }
      footer={<FooterNav selectedNav="candidate" />}
    >
      <Box>{answers}</Box>
    </WrapperWithFooter>
  )
}

export default createFragmentContainer(CandidatePosition, {
  candidate: graphql`
    fragment CandidatePosition_candidate on Candidate {
      id
      image
      ...CandidateInfo_candidate
      answers {
        title
        id
        option1
        option2
        option3
        option4
        option5
        CandidateResponse {
          response
        }
      }
    }
  `,
})
