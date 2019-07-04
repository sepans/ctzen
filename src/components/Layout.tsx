import styled from 'styled-components'
import React from 'react'
import { Typography, Box, Button as SmoothButton, th } from '@smooth-ui/core-sc'

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
}

enum ButtonType {
  cta = "cta",
  answer = "answer",
  selected = "selected"
}
interface ButtonProps {
  type?: keyof typeof ButtonType
}

export const Title: React.FC = ({children}) => <Typography variant="h2" fontSize="4">{children}</Typography>

export const Text: React.FC<TextProps> = ({ children, type = TextTypes.secondary, style = {}, block = false }) => {
  return <Typography style={style} display={block ? "block" : "auto"} fontSize={ type===TextTypes.primary ? "2" : "1"}>{children}</Typography>
}

// TODO: styled extend instead of :point-down ?
// export const Button: React.FC<ButtonProps> = ({children, style = {}, onClick, variant}) => {
//   const smoothVariant = switch()
//   return <SmoothButton onClick={onClick} variant="black" style={style}>{children}</SmoothButton>
// }

const buttonTypeToColor = (type: ButtonType): any => {
  let c 
  switch(type) {
    case ButtonType.cta:
     c =  "black100"
      break;
    case ButtonType.answer:
      c = "black20"
      break;
    case ButtonType.selected:
     c = "black"
      break;        
  }

  return c
}

const buttonTypeToTextColor = (type: ButtonType): any => {
  let c
  switch (type) {
    case ButtonType.cta:
      c = "black20"
      break;
    case ButtonType.answer:
      c = "black100"
      break;
    case ButtonType.selected:
      c = "black20"
      break;
  }
  return c
}

// TODO: somehow use variant? try export const Button = (props) => <SmoothButton {...props} variant={typeToVariant(props.type)}>{children}<SmoothProps>
export const Button = styled(SmoothButton)<ButtonProps>`
  background-color: ${({ type = ButtonType.cta }) => th(buttonTypeToColor(type))};
  color: ${({ type = ButtonType.cta }) => th(buttonTypeToTextColor(type))};
  &:hover {
    background-color: ${({ type = ButtonType.cta }) => th(buttonTypeToColor(type))} !important;
  }
`



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


export const PageWrapper = ({ children }) => <Box p={50}>{children}</Box>