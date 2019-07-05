import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay';
import { CandidateList_candidates } from "./__generated__/CandidateList_candidates.graphql"
import { CandidateList_myNextQuestion } from "./__generated__/CandidateList_myNextQuestion.graphql"
import styled from 'styled-components';
import { PageWrapper, Button } from '../components/Layout';
import { Box } from "@smooth-ui/core-sc"
import { CandidateImage, Text } from "../components/Layout"

interface CandidateListProps {
  candidates: CandidateList_candidates
  myNextQuestion: CandidateList_myNextQuestion
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, myNextQuestion }) => {
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
        {myNextQuestion ? <Link to={`/question/${myNextQuestion.id}`}>
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
    myNextQuestion: graphql`
    fragment CandidateList_myNextQuestion on Question  {
      id
    }
  `}
)