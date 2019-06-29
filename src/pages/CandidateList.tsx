import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay';
import { CandidateList_candidates } from "./__generated__/CandidateList_candidates.graphql"
import styled from 'styled-components';
import { PageWrapper } from '../components/Layout';
import { Typography, Box, Button } from "@smooth-ui/core-sc"
import { CandidateImage } from "../components/Layout"

interface CandidateListProps {
  candidates: CandidateList_candidates
}

const CandidateList: React.FC<CandidateListProps> = ({candidates}) => {
  const firstQuestionLink = `/question/1` // TODO: Fixme get first question
  const candidateList = candidates.map((candidate, i) => (
    <Item key={i}> {/* TODO: why || 'aa */}
    
    <Link to={`/candidate/${candidate.id}`}>
      <CandidateImage img={candidate.image as string} />
        <Typography variant="h3" fontSize="3">{candidate.name}</Typography>
      </Link>
    </Item>
  ))
  return (
    <PageWrapper>
      <Box>
        <Link to={firstQuestionLink}>
          <Button>Start answering questions</Button>
        </Link>
      </Box>
      <List>
        {candidateList}
      </List>
    </PageWrapper>
  )
}

const List = styled.ul`
  list-style: none;
`

const Item = styled.li`

`

export default createFragmentContainer(
  CandidateList, {
    candidates: graphql`
    fragment CandidateList_candidates on Candidate @relay(plural: true) {
      id
      name: displayName
      image
    }
  `}
)