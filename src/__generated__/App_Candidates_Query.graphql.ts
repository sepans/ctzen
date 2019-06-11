/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CandidateList_candidates$ref = any;
export type App_Candidates_QueryVariables = {};
export type App_Candidates_QueryResponse = {
    readonly candidates: ReadonlyArray<{
        readonly " $fragmentRefs": CandidateList_candidates$ref;
    } | null> | null;
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
}

fragment CandidateList_candidates on Candidate {
  id
  name: displayName
  image
}
*/

const node: ConcreteRequest = {
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "image",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Candidates_Query",
    "id": null,
    "text": "query App_Candidates_Query {\n  candidates {\n    ...CandidateList_candidates\n    id\n  }\n}\n\nfragment CandidateList_candidates on Candidate {\n  id\n  name: displayName\n  image\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '15305f8f902b1ac0d0a8f4928c2b9a12';
export default node;
