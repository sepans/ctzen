import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components'
import { Position } from './Position'
import { Section } from './Layout'
import CandidateInfo from './CandidateInfo'
import { CandidatePosition_candidate } from "./__generated__/CandidatePosition_candidate.graphql"


interface Props {
  candidate: CandidatePosition_candidate
}

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

const CandidatePosition = (props) => {
  console.log('position', props)
  return (
      <Wrapper>
      <Header>Find by category policy, candidate, metrics</Header>
      <CandidateInfo candidate={props.candidate}/>
      <Section>
        <Position title="Foreign Policy" position={1} candidate={props.candidate} />
        <Position title="Economy" position={2} candidate={props.candidate}  />
      </Section>
      <Section>
        <Position title="Social Policy" position={3}  candidate={props.candidate} />
        <Position title="Economy" position={0} candidate={props.candidate} />
      </Section>      
    </Wrapper>
  )
}

export default createFragmentContainer(
  CandidatePosition, {
    candidate: graphql`
    fragment CandidatePosition_candidate on Candidate {
      image
    }
  `}
)