import styled from 'styled-components'
import React from 'react'
import { Typography, Box, Button as SmoothButton } from '@smooth-ui/core-sc'

export const Section = styled.div`
  padding: 20px 0;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 10px;
  flex: 1;
  min-width: 400px;
`

enum TextTypes {
  primary = "primary",
  secondary = "secondary"
}

interface TextProps {
  type?: keyof typeof TextTypes
  block?: boolean
  style?: any
  [rest: string]: any
}

enum ButtonType {
  cta = "cta",
  answer = "answer",
  selected = "selected"
}

interface ButtonProps {
  type?: keyof typeof ButtonType
  [rest: string]: any
}

export const Title: React.FC = ({children}) => <Typography variant="h2" fontSize="4">{children}</Typography>

export const Text: React.FC<TextProps> = ({ children, type = TextTypes.secondary, style = {}, block = false, ...rest }) => {
  return <Typography {...rest} style={style} display={block ? "block" : "auto"} fontSize={ type===TextTypes.primary ? "2" : "1"}>{children}</Typography>
}

const typeToVariant = (type) => {
  let c
  switch (type) {
    case ButtonType.cta:
      c = "primary"
      break;
    case ButtonType.answer:
      c = "light"
      break;
    case ButtonType.selected:
      c = "dark"
      break;
  }
  return c
}

export const Button: React.FC<ButtonProps> = ({type = ButtonType.cta, children, ...rest}) => {
  const variant = typeToVariant(type)
  const border = "1px solid #000"
  return <SmoothButton border={border} borderRadius="0px" {...rest} variant={variant}>
        {children}
    </SmoothButton>
} 

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

const comp = () => (
  <Text type="primary">aaa</Text>
)


export const PageWrapper = ({ children }) => <Box p={50} height={1}>{children}</Box>