import React, { useState } from 'react'
import { graphql, createFragmentContainer } from 'react-relay'
import { WrapperWithFooter, Text, QuestionBox } from '../components/Layout'
import CandidateInfo from '../components/CandidateInfo'
import { CandidatePosition_candidate } from './__generated__/CandidatePosition_candidate.graphql'
import { Box } from '@smooth-ui/core-sc'
import { Categories } from '../components/Categories'
import { FooterNav } from '../components/FooterNav'
import {
  optionArray,
  mapCategoryName,
} from '../components/helpers/question_helpers'
import { Link } from 'found'

interface Props {
  candidate: CandidatePosition_candidate
}

const CandidatePosition: React.FC<Props> = ({ candidate }) => {
  const [category, setCategory] = useState('Economy')
  const answers =
    candidate.answers &&
    candidate.answers
      .filter(answer => mapCategoryName(answer!.category) === category)
      .map((answer, i) => {
        if (!answer) {
          return null
        }
        const pick =
          (answer.CandidateResponse && answer.CandidateResponse.response) || 0
        const pickOption = optionArray(answer).find(
          option => option.index === pick
        )
        const pickText = pickOption ? pickOption!.text : 'No data'
        return (
          <QuestionBox>
            <Link key={i} to={`/comments/${candidate.id}/${answer.id}`}>
              <Box py={2} px={3}>
                <Text type="primary">{answer.title}</Text>
                <Box my={2}>
                  <Text>{pickText}</Text>
                </Box>
              </Box>
            </Link>
          </QuestionBox>
        )
      })

  return (
    <WrapperWithFooter
      header={
        <>
          <CandidateInfo candidate={candidate} />
          <Box borderTop="1px solid #050505" />
          <Categories selected={category} onSelect={setCategory} />
        </>
      }
      footer={<FooterNav selectedNav="candidate" />}
    >
      <Box p={4}>{answers}</Box>
    </WrapperWithFooter>
  )
}

export default createFragmentContainer(CandidatePosition, {
  candidate: graphql`
    fragment CandidatePosition_candidate on Candidate {
      id
      image
      ...CandidateInfo_candidate
      answers {
        title
        id
        option1
        option2
        option3
        option4
        option5
        category
        CandidateResponse {
          response
        }
      }
    }
  `,
})
