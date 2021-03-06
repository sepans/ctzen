import React from 'react'
import { Link } from 'found'
import { graphql, createFragmentContainer } from 'react-relay'
import {
  PageWrapper,
  Button,
  Title,
  ReverseElementColors,
} from '../components/Layout'
import { Box } from '@smooth-ui/core-sc'
import { Home_me } from './__generated__/Home_me.graphql'

interface HomeProps {
  me: Home_me
}

const Home: React.FC<HomeProps> = ({ me: { nextQuestion, user } }) => {
  const previouslyAnswered = user && user.answers && user.answers.length
  const action = previouslyAnswered ? 'Continue' : 'Start'

  const questionButton = nextQuestion ? (
    <Link to={`/question/${nextQuestion.id}`}>
      <Button type="cta">{action} answering questions</Button>
    </Link>
  ) : (
    <Link to="/responses">
      <Button type="cta">View your answers</Button>
    </Link>
  )

  return (
    <PageWrapper noPadding>
      <Box
        p={3}
        height={0.5}
        display="flex"
        flexDirection="column"
        borderBottom="1px solid black"
      >
        <Box my={4}>
          <Title>Pick where you stand on the issues:</Title>
        </Box>
        <ButtonBox>{questionButton}</ButtonBox>
      </Box>
      <Box
        height={0.5}
        display="flex"
        flexDirection="column"
        p={3}
        {...ReverseElementColors}
      >
        <Box my={4}>
          <Title>Or, see candidate positions:</Title>
        </Box>
        <ButtonBox>
          <Link to="/candidates">
            <Button type="cta">Candidates</Button>
          </Link>
        </ButtonBox>
      </Box>
      <Box />
    </PageWrapper>
  )
}

const ButtonBox = ({ children }) => (
  <Box justifyContent={'center'} flex={1} display="flex" alignItems={'center'}>
    {children}
  </Box>
)

export default createFragmentContainer(Home, {
  me: graphql`
    fragment Home_me on UserInfo {
      nextQuestion {
        id
      }
      user {
        answers {
          id
        }
      }
    }
  `,
})
