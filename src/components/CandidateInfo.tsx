import React from 'react'
import {graphql, createFragmentContainer} from 'react-relay';
import { CandidateInfo_candidate } from "./__generated__/CandidateInfo_candidate.graphql"

interface Props {
  candidate: CandidateInfo_candidate
}

const CandidateInfo: React.FC<Props> = ({candidate}) => {
  // TODO: fix: subtract dates
  const year =new Date(candidate.dob).getFullYear()
  const age:number = new Date().getFullYear() - year
  return (
    <>
      <img src={candidate.image as string} />
      <h2 key="name">{candidate.name}</h2>
      <h3 key="exp">{candidate.experience}</h3>
      <div key="state">state: {candidate.state}</div>
      <div key="dobs">age: {age}</div>
      <div key="from">Place of birth: {candidate.pob}</div>
    </>
  )
}

export default createFragmentContainer(
  CandidateInfo, {
  candidate: graphql`
    fragment CandidateInfo_candidate on Candidate {
      name: displayName
      image
      dob
      state
      pob
      experience
    }
  `}
)