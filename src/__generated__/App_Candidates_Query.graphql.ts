/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Home_candidates$ref = any;
export type App_Candidates_QueryVariables = {};
export type App_Candidates_QueryResponse = {
    readonly candidates: ReadonlyArray<{
        readonly " $fragmentRefs": Home_candidates$ref;
    } | null> | null;
};
export type App_Candidates_Query = {
    readonly response: App_Candidates_QueryResponse;
    readonly variables: App_Candidates_QueryVariables;
};



/*
query App_Candidates_Query {
  candidates {
    ...Home_candidates
    id
  }
}

fragment Home_candidates on Candidate {
  id
  firstName
  lastName
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
            "name": "Home_candidates",
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
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
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
    "text": "query App_Candidates_Query {\n  candidates {\n    ...Home_candidates\n    id\n  }\n}\n\nfragment Home_candidates on Candidate {\n  id\n  firstName\n  lastName\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '0925fee53120c217c3b9ff5f0c0624d8';
export default node;
