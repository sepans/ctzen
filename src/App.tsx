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
} from 'found';
import { Resolver } from 'found-relay';

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    
    <Route
      path="/candidate/:id"
      Component={CandidatePosition}
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
  ),

  render: createRender({}),
});    

const App = () => <Router resolver={new Resolver(environment)} />

// function App_old() {
//   const candidateId = 3
//   return (
//     <QueryRenderer
//       environment={environment}
//       query={graphql`
//         query App_Candidate_Query($candidateId: ID!) {
//           candidate(id: $candidateId) {
//             ...CandidateInfo_candidate
//           }
//         }
//       `}
//       variables={{candidateId}}
//       render={({error, props}) => {
//         return props ? (
//           <CandidatePosition candidate={props.candidate} />

//         ) : <div>loading</div>
//         }}
//       />
//   )
// }

export default App;
