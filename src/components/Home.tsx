import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay';
import { Home_candidates } from "./__generated__/Home_candidates.graphql"
import styled from 'styled-components';

interface CandidateListProps {
  candidates: Home_candidates
}

const Home: React.FC<CandidateListProps> = ({candidates}) => {
  const candidateList = candidates.map((candidate, i) => (
    <CandidateListItem key={i}> {/* TODO: why || 'aa */}
    
    <Link to={`/candidate/${candidate.id}`}>
      <CandidateImage src={candidate.image as string} />
        <h3>{candidate.name}</h3>
      </Link>
    </CandidateListItem>
  ))
  return (
    <CandidateList>
      {candidateList}
    </CandidateList>
  )
}

const CandidateImage = styled.img`
  margin-right: 5px;
`

const CandidateList = styled.ul`
  list-style: none;
`

const CandidateListItem = styled.li`
  a, a:visited, a:hover {
    text-decoration: none;
    color: black;

  }
`

export default createFragmentContainer(
  Home, {
    candidates: graphql`
    fragment Home_candidates on Candidate @relay(plural: true) {
      id
      name: displayName
      image
    }
  `}
)