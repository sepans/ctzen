import React from 'react';
import { CandidatePosition } from './components/CandidatePosition'


import {graphql, QueryRenderer} from 'react-relay';
import environment from './config/relayEnvironment'
// import CandidateInfo_candidate from './components/__generated__/CandidateInfo_candidate.graphql';

import { BrowserProtocol, queryMiddleware } from 'farce';
import {
  createFarceRouter,
  createRender,
  makeRouteConfig,
  Route,
  Link
} from 'found';
import { Resolver } from 'found-relay';

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    <>
      <Route path="/" render={() => <Link to="/candidate/3">warren</Link>} >
      </Route>
      <Route
        path="candidate/:id"
        query={graphql`
          query App_Candidate_Query($id: ID!) {
            candidate(id: $id) {
              ...CandidateInfo_candidate
            }
          }
        `}
        render={({ props }) => {
          return props ? (
            <CandidatePosition {...props} />

          ) : <div>loading</div>
        }}   
    
      />
    </>


  ),

  render: createRender({}),
});    

const App = () => <Router resolver={new Resolver(environment)} />

export default App;
