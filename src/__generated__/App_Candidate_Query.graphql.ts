/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CandidatePosition_candidate$ref = any;
export type App_Candidate_QueryVariables = {
    readonly id: string;
};
export type App_Candidate_QueryResponse = {
    readonly candidate: {
        readonly " $fragmentRefs": CandidatePosition_candidate$ref;
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
    ...CandidatePosition_candidate
    id
  }
}

fragment CandidatePosition_candidate on Candidate {
  id
  image
  ...CandidateInfo_candidate
  answers {
    title
    id
    option1
    option2
    option3
    option4
    option5
    category
    CandidateResponse {
      response
    }
  }
}

fragment CandidateInfo_candidate on Candidate {
  name: displayName
  image
  dob
  state
  pob
  experience
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
],
v2 = {
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
            "name": "CandidatePosition_candidate",
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
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "image",
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
            "name": "dob",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "state",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pob",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "answers",
            "storageKey": null,
            "args": null,
            "concreteType": "CandidateAnswer",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "option1",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "option2",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "option3",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "option4",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "option5",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "category",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "CandidateResponse",
                "storageKey": null,
                "args": null,
                "concreteType": "CandidateAnswerPick",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "response",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Candidate_Query",
    "id": null,
    "text": "query App_Candidate_Query(\n  $id: ID!\n) {\n  candidate(id: $id) {\n    ...CandidatePosition_candidate\n    id\n  }\n}\n\nfragment CandidatePosition_candidate on Candidate {\n  id\n  image\n  ...CandidateInfo_candidate\n  answers {\n    title\n    id\n    option1\n    option2\n    option3\n    option4\n    option5\n    category\n    CandidateResponse {\n      response\n    }\n  }\n}\n\nfragment CandidateInfo_candidate on Candidate {\n  name: displayName\n  image\n  dob\n  state\n  pob\n  experience\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b7825deed11a3b0d5a415b366bee2fb8';
export default node;
