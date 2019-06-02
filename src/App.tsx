import React from 'react';
import styled from 'styled-components'
import { Position } from './components/Position'
import { Section } from './components/Layout'

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
  return (
    <Wrapper>
      <Header>Find by category policy, candidate, metrics</Header>
      <h1>Elizabeth Warren</h1>
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

export default App;
