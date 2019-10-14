import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { CandidateInfo_candidate } from './__generated__/CandidateInfo_candidate.graphql'
import { Box } from '@smooth-ui/core-sc'
import { CandidateImage, Text, ReverseElementColors } from './Layout'

interface Props {
  candidate: CandidateInfo_candidate
  showDetails: boolean
}

const CandidateInfo: React.FC<Props> = ({ candidate, showDetails = false }) => {
  // TODO: fix: subtract dates
  const year = new Date(candidate.dob).getFullYear()

  const age: number = new Date().getFullYear() - year
  return (
    <>
      <Box display="flex" flexDirection="row" p={4} {...ReverseElementColors}>
        <CandidateImage img={candidate.image as string} />
        <Box pl={3}>
          <Text block type="primary">
            {candidate.name}
          </Text>
          <Text block type="secondary">
            {candidate.experience}
          </Text>
          {showDetails && (
            <>
              <Text pt={1} block>
                state: {candidate.state}
              </Text>
              <Text block>age: {age}</Text>
              <Text block>Place of birth: {candidate.pob}</Text>
            </>
          )}
        </Box>
      </Box>
    </>
  )
}

export default createFragmentContainer(CandidateInfo, {
  candidate: graphql`
    fragment CandidateInfo_candidate on Candidate {
      name: displayName
      image
      dob
      state
      pob
      experience
    }
  `,
})
