import React from 'react';
import CandidatePosition from './pages/CandidatePosition'
import CandidateList from './pages/CandidateList'

import { graphql } from 'react-relay';
import environment from './config/relayEnvironment'
import { ThemeProvider } from '@smooth-ui/core-sc'
import { theme } from "./theme"
import { Normalize } from '@smooth-ui/core-sc'

import { BrowserProtocol, queryMiddleware } from 'farce';
import {
  createFarceRouter,
  createRender,
  makeRouteConfig,
  Route,
} from 'found';
import { Resolver } from 'found-relay';
import Question from './pages/Question';
import Responses from './pages/Responses';


const Loading = () => <div>loading</div>

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    <>
      <Route 
        path="/" 
        render={({ props }) => { return props ? <CandidateList {...props} /> : <Loading />}} 
        query={graphql`
          query App_Candidates_Query {
            candidates {
              ...CandidateList_candidates
            }
            myNextQuestion {
              ...CandidateList_myNextQuestion
            }
          }
        `}
        
      >
      </Route>
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
          return props ? (
            <CandidatePosition {...props} />

          ) : <Loading />
        }}   
    
      />
      <Route
        path="question/:id"
        query={graphql`
          query App_Question_Query($id: ID!) {
            question(id: $id) {
              ...Question_question
            }
          }
        `}
        render={({ props }) => {
          return props ? (
            <Question {...props} />

          ) : <Loading />
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
          return props ? (
            <Responses {...props} />

          ) : <Loading />
        }}

      />
    </>


  ),

  render: createRender({}),
});    



const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <Router resolver={new Resolver(environment)} />
    </>
  </ThemeProvider>
)

export default App;
