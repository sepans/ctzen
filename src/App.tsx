import React from 'react';
import { CandidatePosition } from './components/CandidatePosition'


import {graphql, QueryRenderer} from 'react-relay';
import environment from './config/relayEnvironment'
// import CandidateInfo_candidate from './components/__generated__/CandidateInfo_candidate.graphql';



function App() {
  const candidateId = 3
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query App_Candidate_Query($candidateId: ID!) {
          candidate(id: $candidateId) {
            ...CandidateInfo_candidate
          }
        }
      `}
      variables={{candidateId}}
      render={({error, props}) => {
        return props ? (
          <CandidatePosition candidate={props.candidate} />

        ) : <div>loading</div>
        }}
      />
  )
}

export default App;
