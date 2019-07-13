import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay';
import { CandidateList_candidates } from "./__generated__/CandidateList_candidates.graphql"
import { CandidateList_me } from "./__generated__/CandidateList_me.graphql"
import styled from 'styled-components';
import { PageWrapper, Button } from '../components/Layout';
import { Box } from "@smooth-ui/core-sc"
import { CandidateImage, Text } from "../components/Layout"

interface CandidateListProps {
  candidates: CandidateList_candidates
  me: CandidateList_me
}

const CandidateList: React.FC<CandidateListProps> = (props) => {
  console.log(props)
  const { candidates, me } = props
  const candidateList = candidates.map((candidate, i) => (
    <Box key={i} my={2}> {/* TODO: why || 'aa */}
      <Link to={`/candidate/${candidate.id}`}>
        <Box display="flex">
          <CandidateImage img={candidate.image as string} />
          <Box pl={2}>
            <Text block type="primary">{candidate.name}</Text>
            <Text>{candidate.experience}</Text>
          </Box>
        </Box>
      </Link>
    </Box>
  ))
  return (
    <PageWrapper>
      <Box>
        {me.nextQuestion && me.nextQuestion ? <Link to={`/question/${me.nextQuestion.id}`}>
          <Button type="cta">Start answering questions</Button>
        </Link> :
        <Link to="/responses">
          <Button type="cta">View your answers</Button>
        </Link>
      }
      </Box>
      <Box mt={2}>
        {candidateList}
      </Box>
    </PageWrapper>
  )
}



export default createFragmentContainer(
  CandidateList, {
    candidates: graphql`
    fragment CandidateList_candidates on Candidate @relay(plural: true) {
      id
      name: displayName
      experience
      image
    }
  `,
    me: graphql`
    fragment CandidateList_me on UserNextQuestion  {
      nextQuestion {
        id
      }
    }
  `}
)