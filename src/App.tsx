import React from 'react';
import CandidatePosition from './components/CandidatePosition'
import Home from './components/Home'

import { graphql } from 'react-relay';
import environment from './config/relayEnvironment'

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
        render={({ props} ) => { return props ? <Home {...props} /> : <Loading />}} 
        query={graphql`
          query App_Candidates_Query {
            candidates {
              ...Home_candidates
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

const App = () => <Router resolver={new Resolver(environment)} />

export default App;
