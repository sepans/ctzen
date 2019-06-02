import React from 'react'
import styled from 'styled-components'

export const Section = styled.div`
  padding: 20px 0;
  /* background-color: #F5F5F5; */
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
  width: calc(50% - 15px);
  display: inline-block;
`

export const SectionTitle = styled.h2`
  font-size: 16px;
`

export const CandidateAvatar = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #333;
  background-image: url(${(p: {img: string}) => p.img});
  background-size: 50px 60px;
  display: inline-block;
`