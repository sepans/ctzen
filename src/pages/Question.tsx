import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components';
import { PageWrapper } from '../components/Layout';
import { Typography } from "@smooth-ui/core-sc"
import { Question_question } from "./__generated__/Question_question.graphql"


interface Props {
  question: Question_question
}

const Question: React.FC<Props> = ({ question }) => {
  const { title } = question as any // TODO: remove as any
  return (
    <PageWrapper>
      {title}
    </PageWrapper>
  )
}


export default createFragmentContainer(
  Question, {
    question: graphql`
    fragment Question_question on Question {
      id
      title
      level
      option1
      option2
    }
  `}
)