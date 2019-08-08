import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
// import { render } from 'enzyme'
import { ReactTestRenderer } from 'react-test-renderer'
import React from 'react'
// import { render } from 'enzyme'
import { graphql, QueryRenderer } from 'react-relay'
// import graphql from 'babel-plugin-relay/macro'
// import { graphql } from 'relay-runtime'

import CandidateInfo from './CandidateInfo'
// import { CandidateInfo_candidate } from './__generated__/CandidateInfo_candidate.graphql'

describe('CandidateInfo', () => {
  const environment = createMockEnvironment()
  const renderer = ReactTestRenderer.create(
    <CandidateInfo environment={environment} />
  )
  // const TestRenderer = () => {
  //   return (
  //     <QueryRenderer
  //       environment={environment}
  //       query={graphql`
  //         query App_Candidate_Query($id: ID!) {
  //           candidate(id: $id) {
  //             ...CandidateInfo_candidate
  //           }
  //         }
  //       `}
  //       variables={{ id: 1 }}
  //       render={({ error, props }) => {
  //         console.log('PROPS', props, error)
  //         if (props) {
  //           return <CandidateInfo myData={props.myData} />
  //         } else if (error) {
  //           return error.message
  //         }
  //         return 'Loading...'
  //       }}
  //     />
  //   )
  // }
  // const renderer = ReactTestRenderer.create(<TestRenderer />)

  // environment.mock.resolveMostRecentOperation(operation => {
  //   console.log('##### running ', operation)
  //   MockPayloadGenerator.generate(operation)
  // })

  expect(renderer).toMatchInlineSnapshot()
  // const wrapper = render(<TestRenderer />)
  // console.log(wrapper.debug())
})
