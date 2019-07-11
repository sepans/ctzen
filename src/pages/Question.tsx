import React, { useState } from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer, commitMutation } from 'react-relay';
import { PageWrapper, Title, Button, Text } from '../components/Layout';
import { Box } from "@smooth-ui/core-sc"
import { Question_question } from "./__generated__/Question_question.graphql"
import environment from '../config/relayEnvironment'
import { optionArray } from '../components/helpers/question_helpers';

interface Props {
  question: Question_question
  router: any
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

const Question: React.FC<Props> = ({ question, router }) => {
  const [selection, setSelection] = useState(-1)
  const { title } = question

  const nextQuestionLink = (questionId) => `/question/${questionId}`

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
          router.replace(nextQuestionLink(nextQuestion.id))
        },
        onError: err => console.error(err),
      },
    );
  }
  const buttonClick = (i) => {
    if(selection!==i) {
      setSelection(i)
    }
  }

  const options = optionArray(question).map((option, i) => {
    const selected = i === selection
    return (
      <Box key={i} width={{ xs: 1, md: 0.5, lg: 0.33, xl: 0.2 }} pr={1} py={1}>
        <Button
          width="100%"
          py={1}
          onClick={() => buttonClick(i)}
          type={selected ? 'selected' : 'answer'}>
          {option}
        </Button>
      </Box>  
    )

  })

  const afterAnswerSection = (
    <>
      <Box mt={2} display="flex" justifyContent="space-between">
        <>
        <Link to="/responses">
          <Button>
            View answers
          </Button>
        </Link>
          <Button onClick={submitSelection}>
            Next >
        </Button> 
        </>
      </Box>
    </>
  )

  const showNext = selection !== -1
  
  return (
    <PageWrapper>
      <Title>{title}</Title>
      <Box my={3}>
        <Box my={4} display="flex" flexWrap="wrap" justifyContent="start">
            {options}
        </Box>
        {showNext && afterAnswerSection}
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