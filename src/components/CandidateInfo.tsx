import React from 'react'
import styled from 'styled-components'

import {graphql, createFragmentContainer} from 'react-relay';
import environment from '../config/relayEnvironment'

const CandidateInfo = ({candidate}) => {

  return (
    <>
      <h1>{candidate.name}</h1>
      <h2>Age: {candidate.age}</h2>
    </>
  )
}

export default createFragmentContainer(
  CandidateInfo, {
  candidate: graphql`
    fragment CandidateInfo_candidate on Candidate {
      name
      age
    }
  `}
)