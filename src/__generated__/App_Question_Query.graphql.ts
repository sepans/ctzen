/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Question_me$ref = any;
type Question_question$ref = any;
export type App_Question_QueryVariables = {
    readonly id: string;
};
export type App_Question_QueryResponse = {
    readonly question: {
        readonly " $fragmentRefs": Question_question$ref;
    } | null;
    readonly me: {
        readonly " $fragmentRefs": Question_me$ref;
    } | null;
};
export type App_Question_Query = {
    readonly response: App_Question_QueryResponse;
    readonly variables: App_Question_QueryVariables;
};



/*
query App_Question_Query(
  $id: ID!
) {
  question(id: $id) {
    ...Question_question
    id
  }
  me {
    ...Question_me
  }
}

fragment Question_question on Question {
  id
  title
  level
  option1
  option2
  option3
  option4
  option5
}

fragment Question_me on UserInfo {
  matchingCandidates {
    score
    candidate {
      name: displayName
      id
    }
  }
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
    "name": "App_Question_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Question_question",
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
            "name": "Question_me",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Question_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "level",
            "args": null,
            "storageKey": null
          },
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
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": "name",
                    "name": "displayName",
                    "args": null,
                    "storageKey": null
                  },
                  (v2/*: any*/)
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
    "name": "App_Question_Query",
    "id": null,
    "text": "query App_Question_Query(\n  $id: ID!\n) {\n  question(id: $id) {\n    ...Question_question\n    id\n  }\n  me {\n    ...Question_me\n  }\n}\n\nfragment Question_question on Question {\n  id\n  title\n  level\n  option1\n  option2\n  option3\n  option4\n  option5\n}\n\nfragment Question_me on UserInfo {\n  matchingCandidates {\n    score\n    candidate {\n      name: displayName\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c1527b8a52781b8d3f6fe51d739ef2cb';
export default node;
