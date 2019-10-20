/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Responses_me$ref = any;
type Responses_questions$ref = any;
export type App_Responses_me_QueryVariables = {};
export type App_Responses_me_QueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": Responses_me$ref;
    } | null;
    readonly questions: ReadonlyArray<{
        readonly " $fragmentRefs": Responses_questions$ref;
    } | null> | null;
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
  questions {
    ...Responses_questions
    id
  }
}

fragment Responses_me on UserInfo {
  user {
    id
    answers {
      UserResponse {
        response
      }
      id
      title
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

fragment Responses_questions on Question {
  id
  title
  option1
  option2
  option3
  option4
  option5
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "option1",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "option2",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "option3",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "option4",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "option5",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questions",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Responses_questions",
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
                    "concreteType": "UserAnswerPick",
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
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questions",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Responses_me_Query",
    "id": null,
    "text": "query App_Responses_me_Query {\n  me {\n    ...Responses_me\n  }\n  questions {\n    ...Responses_questions\n    id\n  }\n}\n\nfragment Responses_me on UserInfo {\n  user {\n    id\n    answers {\n      UserResponse {\n        response\n      }\n      id\n      title\n      option1\n      option2\n      option3\n      option4\n      option5\n    }\n  }\n  nextQuestion {\n    id\n  }\n}\n\nfragment Responses_questions on Question {\n  id\n  title\n  option1\n  option2\n  option3\n  option4\n  option5\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'cdad16a33ee65682617dcfe5f2a69d14';
export default node;
