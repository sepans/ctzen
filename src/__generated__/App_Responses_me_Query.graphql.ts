/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Responses_me$ref = any;
export type App_Responses_me_QueryVariables = {};
export type App_Responses_me_QueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": Responses_me$ref;
    } | null;
};
export type App_Responses_me_Query = {
    readonly response: App_Responses_me_QueryResponse;
    readonly variables: App_Responses_me_QueryVariables;
};



/*
query App_Responses_me_Query {
  me {
    ...Responses_me
  }
}

fragment Responses_me on UserInfo {
  user {
    id
    answers {
      UserResponse {
        response
      }
      title
      id
      option1
      option2
      option3
      option4
      option5
    }
  }
  nextQuestion {
    id
  }
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
    "name": "App_Responses_me_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "name": "Responses_me",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Responses_me_Query",
    "argumentDefinitions": [],
    "selections": [
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
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "answers",
                "storageKey": null,
                "args": null,
                "concreteType": "UserAnswer",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "UserResponse",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AnswerPick",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  },
                  (v0/*: any*/),
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
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nextQuestion",
            "storageKey": null,
            "args": null,
            "concreteType": "Question",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Responses_me_Query",
    "id": null,
    "text": "query App_Responses_me_Query {\n  me {\n    ...Responses_me\n  }\n}\n\nfragment Responses_me on UserInfo {\n  user {\n    id\n    answers {\n      UserResponse {\n        response\n      }\n      title\n      id\n      option1\n      option2\n      option3\n      option4\n      option5\n    }\n  }\n  nextQuestion {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'fcb555bd08deba9dff43b1a034b824fc';
export default node;
