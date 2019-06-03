import React from 'react'

import {graphql, createFragmentContainer} from 'react-relay';

const CandidateInfo = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.candidate.firstName} {props.candidate.lastName}</h1>
      <h2>Age: {props.candidate.age}</h2>
    </>
  )
}

export default createFragmentContainer(
  CandidateInfo, {
  candidate: graphql`
    fragment CandidateInfo_candidate on Candidate {
      firstName
      lastName
      age
    }
  `}
)