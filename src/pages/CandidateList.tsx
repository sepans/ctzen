import React, { useState } from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay'
import { CandidateList_candidates } from './__generated__/CandidateList_candidates.graphql'
import { PageWrapper, Button, Header, Title } from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { CandidateImage, Text } from '../components/Layout'

interface CandidateListProps {
  candidates: CandidateList_candidates
}

const CandidateList: React.FC<CandidateListProps> = props => {
  const [candidateCount, setCandidateCount] = useState(10)
  const { candidates } = props
  const candidateList = candidates
    .slice(0, candidateCount)
    .map((candidate, i) => (
      <Box key={i} my={2} px={20} pb={10} borderBottom="1px solid #BBB">
        <Link to={`/candidate/${candidate.id}`}>
          <Box display="flex">
            <CandidateImage img={candidate.image as string} />
            <Box pl={2}>
              <Text block type="primary">
                {candidate.name}
              </Text>
              <Text block>{candidate.state}</Text>
              <Text color="gray" block maxWidth={0.85}>
                {candidate.experience}
              </Text>
            </Box>
          </Box>
        </Link>
      </Box>
    ))

  const showMoreBtn = candidateCount < candidates.length && (
    <Box textAlign="center" mx={20} mb={30}>
      <Button width={1} onClick={() => setCandidateCount(candidateCount + 5)}>
        Show more
      </Button>
    </Box>
  )

  return (
    <PageWrapper noPadding>
      <Header noPadding={false}>
        <Title color="white" textAlign="center">
          {candidates.length} Democrat candidates 2020
        </Title>
      </Header>
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
      state
    }
  `,
})
