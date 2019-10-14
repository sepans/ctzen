import React, { useState } from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay'
import { CandidateList_candidates } from './__generated__/CandidateList_candidates.graphql'
import { CandidateList_me } from './__generated__/CandidateList_me.graphql'
import { Button, Header, Title, WrapperWithFooter } from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { CandidateImage, Text } from '../components/Layout'
import { FooterNav } from '../components/FooterNav'

interface CandidateListProps {
  candidates: CandidateList_candidates
  me: CandidateList_me
}

interface MatchingCandidate {
  id: string
  name: string
  experience: string
  image: string
  state: string
  score: number
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, me }) => {
  const [candidateCount, setCandidateCount] = useState(10)
  // const matches = me && me.matchingCandidates
  const candidateWithScore = me!
    .matchingCandidates!.filter(match => match && match.candidate)
    .map(match => {
      const candidate = match!.candidate
      return {
        id: candidate!.id,
        name: candidate!.name,
        experience: candidate!.experience,
        image: candidate!.image,
        state: candidate!.state,
        score: match!.score,
      }
    })
  const candidateListToUse = candidateWithScore!.length
    ? candidateWithScore
    : (candidates as any)
  const candidateList = candidateListToUse!
    .slice(0, candidateCount)
    .map((candidate: MatchingCandidate) => {
      const scorePercent = candidate.score
        ? `${Math.round(candidate.score * 100)}%`
        : ''
      return (
        <Box
          key={candidate.id}
          my={2}
          px={20}
          pb={10}
          borderBottom="1px solid #BBB"
        >
          <Link to={`/candidate/${candidate!.id}`}>
            <Box display="flex" flexDirection="row">
              <CandidateImage img={candidate!.image as string} />
              <Box flex="1">
                <Box pl={2}>
                  <Text block type="primary">
                    {candidate!.name}
                  </Text>
                  <Text block>{candidate!.state}</Text>
                  <Text color="gray" block maxWidth={0.85}>
                    {candidate!.experience}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text type="primary">{scorePercent}</Text>
              </Box>
            </Box>
          </Link>
        </Box>
      )
    })

  const showMoreBtn = candidateCount < candidateListToUse.length && (
    <Box textAlign="center" mx={20} mb={30}>
      <Button width={1} onClick={() => setCandidateCount(candidateCount + 5)}>
        Show more
      </Button>
    </Box>
  )

  return (
    <WrapperWithFooter
      header={
        <Header noPadding={false}>
          <Title color="white" textAlign="center">
            Top 5 Democratic Candidates Leading the Polls
          </Title>
        </Header>
      }
      footer={<FooterNav selectedNav="candidate" />}
    >
      <>
        <Box mt={2}>{candidateList}</Box>
        {showMoreBtn}
      </>
    </WrapperWithFooter>
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
  me: graphql`
    fragment CandidateList_me on UserInfo {
      matchingCandidates {
        score
        candidate {
          id
          name: displayName
          experience
          image
          state
        }
      }
    }
  `,
})
