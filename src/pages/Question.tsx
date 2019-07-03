import React, { useState } from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer, commitMutation } from 'react-relay';
import styled from 'styled-components';
import { PageWrapper } from '../components/Layout';
import { Typography, Box, Button } from "@smooth-ui/core-sc"
import { Question_question } from "./__generated__/Question_question.graphql"
import environment from '../config/relayEnvironment'

interface Props {
  question: Question_question
}

const mutation = graphql`
  mutation Question_userAnswer_Mutation(
    $questionId: ID!, $response: Int
  ) {
    userAnswerQuestion(questionId: $questionId, response: $response) {
      user {
        answers {
          title
          level
          UserResponse {
            response
          }
        }
      }
      nextQuestion {
        id
      }
    }
  }
`

const optionArray = ({ option1, option2, option3, option4, option5 }: Question_question): Array<String> => [
  option1 || 'strongly agree',
  option2 || 'somehow agree',
  option3 || 'neither agree nor disagree',
  option4 || 'somehow disagree',
  option5 || 'strongly disagree'
]

const Question: React.FC<Props> = ({ question }) => {
  const [selection, setSelection] = useState(-1)
  const [answerReceived, setAnswerReceived] = useState(false)
  const [nextQuestion, setNextQuestion] = useState(null)
  const { title } = question

  const getNextQuestion = () => `/question/${nextQuestion}` // TODO: get from graphql, from mutation response?

  const submitSelection = () => {
    const variables = {
      questionId: parseInt(question.id as string),
      response: selection
    }
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (response, errors) => {
          const { nextQuestion } = response.userAnswerQuestion
          nextQuestion && setNextQuestion(nextQuestion.id)
          setAnswerReceived(true)
        },
        onError: err => console.error(err),
      },
    );
  }
  const buttonClick = (i) => {
    if(selection!==i) {
      setSelection(i)
    }
    else {
      submitSelection()
    }
  }

  const options = optionArray(question).map((option, i) => {
    const selected = i === selection
    return (<Button key={i} m={1} 
        onClick={() => buttonClick(i)}
        variant={selected ? 'dark' : 'light'}>
      {option + (selected ? ' ▶ ': '')}
      </Button>)
  })

  const afterAnswerSection = (
    <>
      <Box>
        You picked {optionArray(question)[selection]}
      </Box>
      <Box mt={2}>
        <Link to={getNextQuestion()}>
          <Button variant="light">
            Next question
          </Button> 
        </Link>
      </Box>
    </>
  )
  
  return (
    <PageWrapper>
      <Typography>{title}</Typography>
      <Box my={3}>
        {!answerReceived ? 
          (<Box display="flex">
            {options}
          </Box>) :
        afterAnswerSection}
      </Box>
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
      option3
      option4
      option5
    }
  `}
)