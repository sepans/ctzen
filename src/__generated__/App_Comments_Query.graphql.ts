/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CandidateComments_candidate$ref = any;
export type App_Comments_QueryVariables = {
    readonly candidate_id: string;
};
export type App_Comments_QueryResponse = {
    readonly candidate: {
        readonly " $fragmentRefs": CandidateComments_candidate$ref;
    } | null;
};
export type App_Comments_Query = {
    readonly response: App_Comments_QueryResponse;
    readonly variables: App_Comments_QueryVariables;
};



/*
query App_Comments_Query(
  $candidate_id: ID!
) {
  candidate(id: $candidate_id) {
    ...CandidateComments_candidate
    id
  }
}

fragment CandidateComments_candidate on Candidate {
  image
  displayName
  ...CandidateInfo_candidate
  answers {
    title
    id
    option1
    option2
    option3
    option4
    option5
    CandidateResponse {
      response
      comment
      source
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
    "name": "candidate_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "candidate_id"
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
    "name": "App_Comments_Query",
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
            "name": "CandidateComments_candidate",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Comments_Query",
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
            "name": "image",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "displayName",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "comment",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "source",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Comments_Query",
    "id": null,
    "text": "query App_Comments_Query(\n  $candidate_id: ID!\n) {\n  candidate(id: $candidate_id) {\n    ...CandidateComments_candidate\n    id\n  }\n}\n\nfragment CandidateComments_candidate on Candidate {\n  image\n  displayName\n  ...CandidateInfo_candidate\n  answers {\n    title\n    id\n    option1\n    option2\n    option3\n    option4\n    option5\n    CandidateResponse {\n      response\n      comment\n      source\n    }\n  }\n}\n\nfragment CandidateInfo_candidate on Candidate {\n  name: displayName\n  image\n  dob\n  state\n  pob\n  experience\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'bf02e8c17c887606648beff3bfe725d2';
export default node;
