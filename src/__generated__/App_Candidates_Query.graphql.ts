/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CandidateList_candidates$ref = any;
type CandidateList_myNextQuestion$ref = any;
export type App_Candidates_QueryVariables = {};
export type App_Candidates_QueryResponse = {
    readonly candidates: ReadonlyArray<{
        readonly " $fragmentRefs": CandidateList_candidates$ref;
    } | null> | null;
    readonly myNextQuestion: {
        readonly " $fragmentRefs": CandidateList_myNextQuestion$ref;
    } | null;
};
export type App_Candidates_Query = {
    readonly response: App_Candidates_QueryResponse;
    readonly variables: App_Candidates_QueryVariables;
};



/*
query App_Candidates_Query {
  candidates {
    ...CandidateList_candidates
    id
  }
  myNextQuestion {
    ...CandidateList_myNextQuestion
    id
  }
}

fragment CandidateList_candidates on Candidate {
  id
  name: displayName
  experience
  image
}

fragment CandidateList_myNextQuestion on Question {
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "App_Candidates_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "candidates",
        "storageKey": null,
        "args": null,
        "concreteType": "Candidate",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CandidateList_candidates",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "myNextQuestion",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CandidateList_myNextQuestion",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Candidates_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "candidates",
        "storageKey": null,
        "args": null,
        "concreteType": "Candidate",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "name",
            "name": "displayName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "experience",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "image",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "myNextQuestion",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Candidates_Query",
    "id": null,
    "text": "query App_Candidates_Query {\n  candidates {\n    ...CandidateList_candidates\n    id\n  }\n  myNextQuestion {\n    ...CandidateList_myNextQuestion\n    id\n  }\n}\n\nfragment CandidateList_candidates on Candidate {\n  id\n  name: displayName\n  experience\n  image\n}\n\nfragment CandidateList_myNextQuestion on Question {\n  id\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8830e598a2480d3aee8a3e935e3fa298';
export default node;
