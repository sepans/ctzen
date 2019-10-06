import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { WrapperWithFooter, Text } from '../components/Layout'
import CandidateInfo from '../components/CandidateInfo'
import { CandidateComments_candidate } from './__generated__/CandidateComments_candidate.graphql'
import { Categories } from '../components/Categories'
import { Box } from '@smooth-ui/core-sc'
import { FooterNav } from '../components/FooterNav'
import { Match } from 'found'
import { optionArray } from '../components/helpers/question_helpers'

interface CandidateCommentsProps {
  candidate: CandidateComments_candidate
  match: Match
}

export const CandidateComments: React.FC<CandidateCommentsProps> = ({
  candidate,
  match,
}) => {
  const questionId = match.params.question_id
  const answers = candidate.answers
  const answer = answers!.find(answer => answer!.id === questionId)
  let comments
  if (answer) {
    const pick = answer!.CandidateResponse!.response || 0
    const pickOption = optionArray(answer).find(option => option.index === pick)
    const pickText = pickOption!.text

    comments = (
      <Box p={3}>
        <Box my={2}>
          <Text block>{answer.title}</Text>
        </Box>
        <Box my={2}>
          <Text color="green" pb={1} type="primary" block>
            {candidate.displayName}'s answer:
          </Text>
          <Text block>{pickText}</Text>
        </Box>
        <Box my={2}>
          <Text color="green" pb={1} type="primary" block>
            Quote:
          </Text>
          <Text block>{answer!.CandidateResponse!.comment}</Text>
          <a target="_blank" href={answer!.CandidateResponse!.source || '#'}>
            <Text block pt={3}>
              source
            </Text>
          </a>
        </Box>
      </Box>
    )
  } else {
    comments = <Box p={5}>Question not found</Box>
  }
  return (
    <WrapperWithFooter
      header={
        <>
          <CandidateInfo candidate={candidate} />
        </>
      }
      footer={<FooterNav selectedNav="candidate" />}
    >
      {comments}
    </WrapperWithFooter>
  )
}

export default createFragmentContainer(CandidateComments, {
  candidate: graphql`
    fragment CandidateComments_candidate on Candidate {
      image
      displayName
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
          comment
          source
        }
      }
    }
  `,
})
