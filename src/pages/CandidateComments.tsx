import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { WrapperWithFooter, Text, QuestionBox } from '../components/Layout'
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
      <QuestionBox>
        <Box my={2}>
          <Text type="primary" block>
            {answer.title}
          </Text>
        </Box>
        <Box my={2}>
          <Text block>{pickText}</Text>
        </Box>
        <Box mt={4} py={4} borderTop="1px solid black">
          <Text block>"{answer!.CandidateResponse!.comment}"</Text>
          <a target="_blank" href={answer!.CandidateResponse!.source || '#'}>
            <Text type="primary" block mt={4}>
              ⇨ source
            </Text>
          </a>
        </Box>
      </QuestionBox>
    )
  } else {
    comments = 'Question not found'
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
      <Box p={4}>{comments}</Box>
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
