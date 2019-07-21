import React from 'react'
import styled from 'styled-components'
import { CandidateAvatar, Text } from './Layout'
import { Box } from '@smooth-ui/core-sc'

interface P {
  title: string
  position: number
  candidate: any
}

const Spectrum = styled.div`
  height: 15px;
  width: 100%;
  background: linear-gradient(to right, #eee 0%, #333 100%);
  border: 1px solid #000;
  display: inline-block;
  position: relative;
  margin-top: 10px;
  span:last-of-type {
    &:before {
      width: 20px;
    }
    background-color: red;
  }
`

const SpectrumLabels = styled.span`
  /* position: absolute;
  left: ${(p: { i: number }) => p.i * 33.3}%;
  top: 35px; */
  font-size: 12px;
  position: relative;
  margin-top: 15px;

  &:before {
    content: ' ';
    position: absolute;
    border-left: 2px solid black;
    left: ${(p: { i: number }) => p.i * 33}%;
    top: -37px;
    height: 15px;
  }


`

const Wrapper = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  padding-right: 10px;
  padding-bottom: 50px;
`

const AvatarPositon = styled.div`
  position: absolute;
  top: -10px;
  left: calc(${(p: { left: number }) => p.left * 30}%);
  z-index: 2;
`

export const Position = (props: P) => {
  const { title, position, candidate } = props

  const imageUrl: string = candidate.image
  const labels = [
    'very liberal',
    'liberal',
    'conservative',
    'very conservative',
  ].map((d, i) => (
    <SpectrumLabels key={i} i={i}>
      {d}
    </SpectrumLabels>
  ))

  return (
    <Wrapper>
      <Text block type="primary">
        {title}
      </Text>
      <Box pl={1} mt={2} position="relative">
        <Spectrum />

        <AvatarPositon left={position}>
          <CandidateAvatar img={imageUrl} />
        </AvatarPositon>
        <Box display="flex" justifyContent="space-between">
          {labels}
        </Box>
      </Box>
    </Wrapper>
  )
}
