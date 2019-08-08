import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import reactTestRenderer from 'react-test-renderer'
import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'

import CandidateInfo from './CandidateInfo'

describe('CandidateInfo', () => {
  const environment = createMockEnvironment()

  const TestRenderer = () => {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CandidateInfo_Query($id: ID!) @relay_test_operation {
            candidate(id: $id) {
              ...CandidateInfo_candidate
            }
          }
        `}
        variables={{ id: 1 }}
        render={({ error, props }) => {
          if (props) {
            return <CandidateInfo candidate={props.candidate} />
          }
          return 'Loading...'
        }}
      />
    )
  }

  it('renders', () => {
    const renderer = reactTestRenderer.create(<TestRenderer />)
    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation)
    )
    expect(renderer).toMatchInlineSnapshot(`
      Array [
        <div
          className="sui-box sc-bwzfXH bQCxlf"
        >
          <div
            className="sc-iAyFgw brrEtL"
          />
        </div>,
        <span
          className="sui-typo sc-kEYyzF cmIyuR"
          style={Object {}}
        >
          &lt;mock-value-for-field-"name"&gt;
        </span>,
        <span
          className="sui-typo sc-kEYyzF cmIyuR"
          style={Object {}}
        >
          &lt;mock-value-for-field-"experience"&gt;
        </span>,
        <span
          className="sui-typo sc-kEYyzF zcVTn"
          style={Object {}}
        >
          state: 
          &lt;mock-value-for-field-"state"&gt;
        </span>,
        <span
          className="sui-typo sc-kEYyzF zcVTn"
          style={Object {}}
        >
          age: 
          NaN
        </span>,
        <span
          className="sui-typo sc-kEYyzF zcVTn"
          style={Object {}}
        >
          Place of birth: 
          &lt;mock-value-for-field-"pob"&gt;
        </span>,
      ]
    `)
  })
})
