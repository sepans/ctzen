import React from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { CandidateInfo_candidate } from './__generated__/CandidateInfo_candidate.graphql'
import { Box } from '@smooth-ui/core-sc'
import { CandidateImage, Text } from './Layout'

interface Props {
  candidate: CandidateInfo_candidate
}

const CandidateInfo: React.FC<Props> = ({ candidate }) => {
  // TODO: fix: subtract dates
  const year = new Date(candidate.dob).getFullYear()
  const age: number = new Date().getFullYear() - year
  return (
    <>
      <Box my={1}>
        <CandidateImage img={candidate.image as string} />
      </Box>
      <Text block type="primary">
        {candidate.name}
      </Text>
      <Text block type="primary">
        {candidate.experience}
      </Text>
      <Text block>state: {candidate.state}</Text>
      <Text block>age: {age}</Text>
      <Text block>Place of birth: {candidate.pob}</Text>
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
