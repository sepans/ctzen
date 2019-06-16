import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components'
import { Position } from '../components/Position'
import { Section } from '../components/Layout'
import CandidateInfo from '../components/CandidateInfo'
import { CandidatePosition_candidate } from "./__generated__/CandidatePosition_candidate.graphql"
import { Typography, Box } from "@smooth-ui/core-sc"

interface Props {
  candidate: CandidatePosition_candidate
}

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;
`

const CandidatePosition = (props) => {
  console.log('position', props)
  return (
      <Wrapper>
      <Typography variant="h1">Candidate positions:</Typography>
      <CandidateInfo candidate={props.candidate}/>
      <Box display="flex"  flexWrap="wrap">
        <Section>
          <Position title="Foreign Policy" position={1} candidate={props.candidate} />
          <Position title="Economy" position={2} candidate={props.candidate}  />
        </Section>
        <Section>
          <Position title="Social Policy" position={3}  candidate={props.candidate} />
          <Position title="Economy" position={0} candidate={props.candidate} />
        </Section>      
      </Box>
    </Wrapper>
  )
}

export default createFragmentContainer(
  CandidatePosition, {
    candidate: graphql`
    fragment CandidatePosition_candidate on Candidate {
      image
      ...CandidateInfo_candidate
    }
  `}
)