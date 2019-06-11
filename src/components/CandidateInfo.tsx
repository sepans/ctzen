import React from 'react'
import {graphql, createFragmentContainer} from 'react-relay';
import { CandidateInfo_candidate } from "./__generated__/CandidateInfo_candidate.graphql"
import { Typography, Box } from "@smooth-ui/core-sc"
import { CandidateImage } from "./Layout"

interface Props {
  candidate: CandidateInfo_candidate
}

const CandidateInfo: React.FC<Props> = ({candidate}) => {
  // TODO: fix: subtract dates
  const year =new Date(candidate.dob).getFullYear()
  const age:number = new Date().getFullYear() - year
  return (
    <>
      <Box my={1}>
        <CandidateImage img={candidate.image as string} />
      </Box>
      <Typography variant="h3" fontSize="3" weight="bold">{candidate.name}</Typography>
      <Typography variant="h4" fontSize="3">{candidate.experience}</Typography>
      <InfoItem>state: {candidate.state}</InfoItem>
      <InfoItem>age: {age}</InfoItem>
      <InfoItem>Place of birth: {candidate.pob}</InfoItem>
    </>
  )
}

const InfoItem: React.FC = ({ children }) => <Typography variant="display-4" as="div" fontSize="2">{children}</Typography>

export default createFragmentContainer(
  CandidateInfo, {
  candidate: graphql`
    fragment CandidateInfo_candidate on Candidate {
      name: displayName
      image
      dob
      state
      pob
      experience
    }
  `}
)