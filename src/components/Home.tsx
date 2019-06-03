import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay';
import { Home_candidates } from "./__generated__/Home_candidates.graphql"
import styled from 'styled-components';

interface CandidateListProps {
  candidates: Home_candidates
}

const Home: React.FC<CandidateListProps> = ({candidates}) => {
  const candidateList = candidates.map(candidate => (
    <CandidateListItem key={candidate.lastName || 'aa'}> {/* TODO: why || 'aa */}
      <Link to={`/candidate/${candidate.id}`}>{candidate.firstName} {candidate.lastName}</Link>
    </CandidateListItem>
  ))
  return (
    <ul>
      {candidateList}
    </ul>
  )
}

const CandidateListItem = styled.li`
`

export default createFragmentContainer(
  Home, {
    candidates: graphql`
    fragment Home_candidates on Candidate @relay(plural: true) {
      id
      firstName
      lastName
    }
  `}
)