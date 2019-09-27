import React from 'react'
import { Box } from '@smooth-ui/core-sc'
import { Text, Button } from './Layout'
import { Link } from 'found'

interface FooterNavProps {
  selectedNav: 'me' | 'candidate' | 'none'
}

const restNavStyles = {
  color: 'black',
  backgroundColor: 'white',
  width: '150px',
}

const selectedNavStyles = {
  color: 'red',
  backgroundColor: 'white',
  width: '150px',
}

export const FooterNav: React.FC<FooterNavProps> = ({ selectedNav }) => {
  const candidateStyles =
    selectedNav === 'candidate' ? selectedNavStyles : restNavStyles
  const meStyles = selectedNav === 'me' ? selectedNavStyles : restNavStyles
  return (
    <Box
      width="100%"
      bottom="0px"
      p={2}
      backgroundColor="black"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      position="fixed"
    >
      <Link to={`/responses`}>
        <Button {...meStyles}>
          <Text type="secondary">Me</Text>
        </Button>
      </Link>
      <Link to={`/candidates`}>
        <Button p={1} {...candidateStyles}>
          <Text type="secondary">Candidate</Text>
        </Button>
      </Link>
    </Box>
  )
}
