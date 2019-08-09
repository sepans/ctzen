import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils'
import reactTestRenderer from 'react-test-renderer'
import React from 'react'

import { graphql, QueryRenderer } from 'react-relay'

import CandidateList from './CandidateList'

jest.mock('found', () => ({
  Link: component => <a href={`${component.to}`}>{component.children}</a>,
}))

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
    expect(renderer).toMatchInlineSnapshot(`
      <div
        className="sui-box sc-bwzfXH icQAQh"
      >
        <div
          className="sui-box sc-bwzfXH cYfXqZ"
        >
          <div
            className="sui-box sc-bwzfXH bgUypY"
          >
            <a
              href="/candidate/candidate-id-1"
            >
              <div
                className="sui-box sc-bwzfXH kwleVE"
              >
                <div
                  className="sc-iAyFgw brrEtL"
                />
                <div
                  className="sui-box sc-bwzfXH ftgQHD"
                >
                  <span
                    className="sui-typo sc-kEYyzF cmIyuR"
                    style={Object {}}
                  >
                    &lt;mock-value-for-field-"name"&gt;
                  </span>
                  <span
                    className="sui-typo sc-kEYyzF iDKUZE"
                    style={Object {}}
                  >
                    &lt;mock-value-for-field-"experience"&gt;
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    `)
  })
})
