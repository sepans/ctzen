import React, { useState } from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay'
import { CandidateList_candidates } from './__generated__/CandidateList_candidates.graphql'
import { PageWrapper, Button } from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { CandidateImage, Text } from '../components/Layout'

interface CandidateListProps {
  candidates: CandidateList_candidates
}

const CandidateList: React.FC<CandidateListProps> = props => {
  const [candidateCount, setCandidateCount] = useState(6)
  const { candidates } = props
  const candidateList = candidates
    .slice(0, candidateCount)
    .map((candidate, i) => (
      <Box key={i} my={2}>
        <Link to={`/candidate/${candidate.id}`}>
          <Box display="flex">
            <CandidateImage img={candidate.image as string} />
            <Box pl={2}>
              <Text block type="primary">
                {candidate.name}
              </Text>
              <Text>{candidate.experience}</Text>
            </Box>
          </Box>
        </Link>
      </Box>
    ))

  const showMoreBtn = candidateCount < candidates.length && (
    <Box textAlign="center">
      <Button onClick={() => setCandidateCount(candidateCount + 5)}>
        Show more
      </Button>
    </Box>
  )

  return (
    <PageWrapper>
      <Box mt={2}>{candidateList}</Box>
      {showMoreBtn}
    </PageWrapper>
  )
}

export default createFragmentContainer(CandidateList, {
  candidates: graphql`
    fragment CandidateList_candidates on Candidate @relay(plural: true) {
      id
      name: displayName
      experience
      image
    }
  `,
})
