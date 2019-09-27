/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CandidateList_candidates$ref = any;
type CandidateList_me$ref = any;
export type App_Candidates_QueryVariables = {};
export type App_Candidates_QueryResponse = {
    readonly candidates: ReadonlyArray<{
        readonly " $fragmentRefs": CandidateList_candidates$ref;
    } | null> | null;
    readonly me: {
        readonly " $fragmentRefs": CandidateList_me$ref;
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
  me {
    ...CandidateList_me
  }
}

fragment CandidateList_candidates on Candidate {
  id
  name: displayName
  experience
  image
  state
}

fragment CandidateList_me on UserInfo {
  matchingCandidates {
    score
    candidate {
      id
      name: displayName
      experience
      image
      state
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "state",
    "args": null,
    "storageKey": null
  }
];
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
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "UserInfo",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CandidateList_me",
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
        "selections": (v0/*: any*/)
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "UserInfo",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "matchingCandidates",
            "storageKey": null,
            "args": null,
            "concreteType": "MatchingCandidate",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "score",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "candidate",
                "storageKey": null,
                "args": null,
                "concreteType": "Candidate",
                "plural": false,
                "selections": (v0/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Candidates_Query",
    "id": null,
    "text": "query App_Candidates_Query {\n  candidates {\n    ...CandidateList_candidates\n    id\n  }\n  me {\n    ...CandidateList_me\n  }\n}\n\nfragment CandidateList_candidates on Candidate {\n  id\n  name: displayName\n  experience\n  image\n  state\n}\n\nfragment CandidateList_me on UserInfo {\n  matchingCandidates {\n    score\n    candidate {\n      id\n      name: displayName\n      experience\n      image\n      state\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5c7989355f61669f39ae674ea4a0425a';
export default node;
