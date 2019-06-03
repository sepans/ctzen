/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CandidateInfo_candidate$ref = any;
export type App_Candidate_QueryVariables = {
    readonly id: string;
};
export type App_Candidate_QueryResponse = {
    readonly candidate: {
        readonly " $fragmentRefs": CandidateInfo_candidate$ref;
    } | null;
};
export type App_Candidate_Query = {
    readonly response: App_Candidate_QueryResponse;
    readonly variables: App_Candidate_QueryVariables;
};



/*
query App_Candidate_Query(
  $id: ID!
) {
  candidate(id: $id) {
    ...CandidateInfo_candidate
    id
  }
}

fragment CandidateInfo_candidate on Candidate {
  firstName
  lastName
  age
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "App_Candidate_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "candidate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Candidate",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CandidateInfo_candidate",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Candidate_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "candidate",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Candidate",
        "plural": false,
        "selections": [
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "age",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Candidate_Query",
    "id": null,
    "text": "query App_Candidate_Query(\n  $id: ID!\n) {\n  candidate(id: $id) {\n    ...CandidateInfo_candidate\n    id\n  }\n}\n\nfragment CandidateInfo_candidate on Candidate {\n  firstName\n  lastName\n  age\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '27d2cff8c24b3393ea2170bb423447f9';
export default node;
