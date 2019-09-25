import styled from 'styled-components'
import React from 'react'
import { Typography, Box, Button as SmoothButton } from '@smooth-ui/core-sc'

export const Section = styled.div`
  padding: 20px 0;
  border-radius: 5px;
  margin-right: 10px;
  flex: 1;
  width: 100%;
`

enum TextTypes {
  primary = 'primary',
  secondary = 'secondary',
}

interface TextProps extends HasRest {
  type?: keyof typeof TextTypes
  block?: boolean
  style?: any
}

interface HasRest {
  [rest: string]: any
}

enum ButtonType {
  cta = 'cta',
  answer = 'answer',
  selected = 'selected',
}

interface ButtonProps extends HasRest {
  type?: keyof typeof ButtonType
}

export const Title: React.FC<HasRest> = ({ children, ...rest }) => (
  <Typography variant="h2" fontSize="2" {...rest}>
    {children}
  </Typography>
)

export const Text: React.FC<TextProps> = ({
  children,
  type = TextTypes.secondary,
  style = {},
  block = false,
  ...rest
}) => {
  return (
    <Typography
      {...rest}
      style={style}
      display={block ? 'block' : 'auto'}
      fontSize={type === TextTypes.primary ? '2' : '1'}
    >
      {children}
    </Typography>
  )
}

const typeToVariant = type => {
  let c
  switch (type) {
    case ButtonType.cta:
      c = 'primary'
      break
    case ButtonType.answer:
      c = 'light'
      break
    case ButtonType.selected:
      c = 'dark'
      break
  }
  return c
}

export const Button: React.FC<ButtonProps> = ({
  type = ButtonType.cta,
  children,
  ...rest
}) => {
  const variant = typeToVariant(type)
  const border = '1px solid #000'
  return (
    <SmoothButton
      border={border}
      borderRadius="0px"
      {...rest}
      variant={variant}
    >
      {children}
    </SmoothButton>
  )
}

export const CandidateImage = styled.div`
  border-radius: 50%;
  min-width: 42px;
  height: 42px;
  border: 2px solid #333;
  background-image: url(${(p: { img: string }) => p.img});
  background-size: cover;
  display: inline-block;
`

export const CandidateAvatar = styled(CandidateImage)`
  min-width: 50px;
  height: 50px;
  border-width: 2px;
`
interface WrapperProps {
  noPadding?: boolean
}

export const PageWrapper: React.FC<WrapperProps> = ({
  children,
  noPadding = false,
}) => (
  <Box p={noPadding ? 0 : 20} height={1} overflow="scroll">
    {children}
  </Box>
)

export const Header: React.FC<WrapperProps> = ({
  children,
  noPadding = true,
}) => (
  <Box px={noPadding ? 0 : 20} py={20} backgroundColor="black">
    {children}
  </Box>
)

export const ReverseElementColors = {
  backgroundColor: 'black',
  color: 'white',
}
