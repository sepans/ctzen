import React from 'react'
import styled from 'styled-components'
import { CandidateAvatar, SectionTitle } from './Layout'

interface P {
  title: string
  position: number,
  candidate: any
}

const Spectrum = styled.div`
  height: 10px;
  width: 100%;
  background: linear-gradient(to right, #3377d6 0%,#d62c40 100%);
  display: inline-block;
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
`

const SpectrumLabels = styled.span`
  position: absolute;
  left: ${(p: {i: number}) => p.i* 33.3}%;
  top: 35px;
  font-size: 12px;

  &:before {
    content: ' ';
    position: absolute;
    border-left: 2px solid black;
    top: -35px;
    height: 15px;
  }


`

const Wrapper = styled.div`
  border-bottom: 1px solid #EEE;
  margin-bottom: 20px;
  padding-right: 38px;
  padding-bottom: 50px;
  overflow-x: hidden;

`

const AvatarPositon = styled.div`
  position: absolute;
  top: -20px;
  left: calc(${(p: {left: number}) => p.left * 32}% - 5px);
  z-index: 2;
`

export const Position = (props: P) => {
  const {title, position, candidate} = props
   
  const imageUrl: string = candidate.image
  const labels = ['very liberal', 'liberal', 'conservative', 'very conservative'].map((d, i) => (
    <SpectrumLabels key={i} i={i}>{d}</SpectrumLabels>
  ))

  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      <Spectrum>
        <AvatarPositon left={position}>
          <CandidateAvatar img={imageUrl}/>
        </AvatarPositon>
        {labels}
      </Spectrum>
    </Wrapper>
  )

}