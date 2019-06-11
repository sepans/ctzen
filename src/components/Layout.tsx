import styled from 'styled-components'
import React from 'react'
import { Typography, Box } from '@smooth-ui/core-sc'

export const Section = styled.div`
  padding: 20px 0;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
  flex: 1;
  min-width: 400px;
`

export const SectionTitle = ({children}) => <Typography variant="h2" fontSize="4">{children}</Typography>


export const CandidateImage = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 5px solid #333;
  background-image: url(${(p: { img: string }) => p.img});
  background-size: cover;
  display: inline-block;
`

export const CandidateAvatar = styled(CandidateImage)`
  width: 50px;
  height: 50px;
  border-width: 2px;

`


export const PageWrapper = ({ children }) => <Box p={10}>{children}</Box>