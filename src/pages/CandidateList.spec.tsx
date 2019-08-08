import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import reactTestRenderer from 'react-test-renderer'
import React from 'react'

import { graphql, QueryRenderer } from 'react-relay'

import CandidateList from './CandidateList'

describe('CandidateList', () => {
  const environment = createMockEnvironment()
  const TestRenderer = () => {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CandidateList_Query {
            candidates {
              ...CandidateList_candidates
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return <CandidateList candidates={props.candidates} />
          }
          return 'Loading...'
        }}
      />
    )
  }

  it('renders', () => {
    const renderer = reactTestRenderer.create(<TestRenderer />)
    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation, {
        ID(_, generateId) {
          return `candidate-id-${generateId()}`
        },
      })
    )
    expect(renderer).toMatchInlineSnapshot(`null`)
  })
})
