import React from 'react';
import styled from 'styled-components'
import { Position } from './Position'
import { Section } from './Layout'
import CandidateInfo from './CandidateInfo'


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

export const CandidatePosition = (props) => {
  console.log('position', props)
  return (
      <Wrapper>
      <Header>Find by category policy, candidate, metrics</Header>
      <CandidateInfo candidate={props.candidate}/>
      <Section>
        <Position title="Foreign Policy" position={1} />
        <Position title="Economy"  position={2} />
      </Section>
      <Section>
        <Position title="Social Policy" position={3} />
        <Position title="Economy" position={0} />
      </Section>      
    </Wrapper>
  )
}