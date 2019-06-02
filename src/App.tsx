import React from 'react';
import styled from 'styled-components'
import { Position } from './components/Position'
import { Section } from './components/Layout'

import {graphql, QueryRenderer} from 'react-relay';
import environment from './config/relayEnvironment'
import CandidateInfo from './components/CandidateInfo'
// import CandidateInfo_candidate from './components/__generated__/CandidateInfo_candidate.graphql';

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;
`

const Header = styled.div`
  border: 1px solid #333;
  text-align: center;
  padding: 25px;
  font-size: 20px;
`

function App() {
  const candidateId = 1
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
        console.log(error, props)
        return props ? (

          <Wrapper>
            <Header>Find by category policy, candidate, metrics</Header>
            <CandidateInfo candidate={props && props.candidate}/>
            <Section>
              <Position title="Foreign Policy" position={1} />
              <Position title="Economy"  position={2} />
            </Section>
            <Section>
              <Position title="Social Policy" position={3} />
              <Position title="Economy" position={0} />
            </Section>      
          </Wrapper>
        ) : <div>loading</div>
        }}
      />
  )
}

export default App;
