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
      <h1 key="name">{candidate.name}</h1>
      <div key="dobs">age: {age}</div>
      <div key="exp">{candidate.experience}</div>
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
      experience
    }
  `}
)