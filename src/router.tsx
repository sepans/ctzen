import React from 'react'
import CandidatePosition from './pages/CandidatePosition'
import CandidateList from './pages/CandidateList'

import { graphql } from 'react-relay'

import { BrowserProtocol, queryMiddleware } from 'farce'
import { createFarceRouter, createRender, makeRouteConfig, Route } from 'found'
import Question from './pages/Question'
import Responses from './pages/Responses'
import Home from './pages/Home'
const Loading = () => <div>loading</div>

export const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    <>
      <Route
        path="/"
        render={({ props }) => {
          return props ? <Home {...props} /> : <Loading />
        }}
        query={graphql`
          query App_Home_Query {
            me {
              ...Home_me
            }
          }
        `}
      />
      <Route
        path="/candidates"
        render={({ props }) => {
          return props ? <CandidateList {...props} /> : <Loading />
        }}
        query={graphql`
          query App_Candidates_Query {
            candidates {
              ...CandidateList_candidates
            }
            me {
              ...CandidateList_me
            }
          }
        `}
      />
      <Route
        path="candidate/:id"
        query={graphql`
          query App_Candidate_Query($id: ID!) {
            candidate(id: $id) {
              ...CandidatePosition_candidate
            }
          }
        `}
        render={({ props }) => {
          return props ? <CandidatePosition {...props} /> : <Loading />
        }}
      />
      <Route
        path="question/:id"
        query={graphql`
          query App_Question_Query($id: ID!) {
            question(id: $id) {
              ...Question_question
            }
            me {
              ...Question_me
            }
          }
        `}
        render={({ props }) => {
          return props ? <Question {...props} /> : <Loading />
        }}
      />
      <Route
        path="responses"
        query={graphql`
          query App_Responses_me_Query {
            me {
              ...Responses_me
            }
          }
        `}
        render={({ props }) => {
          return props ? <Responses {...props} /> : <Loading />
        }}
      />
    </>
  ),

  render: createRender({}),
})
