import React from 'react'
import { Box } from '@smooth-ui/core-sc'
import { Text, Button } from './Layout'
import { Link } from 'found'

interface FooterNavProps {
  selectedNav: 'me' | 'candidate' | 'none'
}

const selectedNavStyles = {
  borderBottom: '2px solid black',
}

export const FooterNav: React.FC<FooterNavProps> = ({ selectedNav }) => {
  const candidateStyles = selectedNav === 'candidate' ? selectedNavStyles : {}
  const meStyles = selectedNav === 'me' ? selectedNavStyles : {}
  return (
    <Box
      width="100%"
      p={3}
      backgroundColor="white"
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
    >
      <Box {...meStyles}>
        <Link to={`/responses`}>
          <Text type="primary">YOU</Text>
        </Link>
      </Box>
      <Box {...candidateStyles}>
        <Link to={`/candidates`}>
          <Text type="primary">CANDIDATES</Text>
        </Link>
      </Box>
    </Box>
  )
}
