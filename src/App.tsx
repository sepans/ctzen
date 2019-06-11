import React from 'react';
import CandidatePosition from './pages/CandidatePosition'
import CandidateList from './pages/CandidateList'

import { graphql } from 'react-relay';
import environment from './config/relayEnvironment'
import { ThemeProvider } from '@smooth-ui/core-sc'
import { theme } from "./theme"

import { BrowserProtocol, queryMiddleware } from 'farce';
import {
  createFarceRouter,
  createRender,
  makeRouteConfig,
  Route,
} from 'found';
import { Resolver } from 'found-relay';

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
    </>


  ),

  render: createRender({}),
});    



const App = () => <ThemeProvider theme={theme}>
    <Router resolver={new Resolver(environment)} />
  </ThemeProvider>

export default App;
