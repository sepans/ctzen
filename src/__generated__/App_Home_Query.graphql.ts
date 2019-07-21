/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Home_me$ref = any;
export type App_Home_QueryVariables = {};
export type App_Home_QueryResponse = {
    readonly me: {
        readonly " $fragmentRefs": Home_me$ref;
    } | null;
};
export type App_Home_Query = {
    readonly response: App_Home_QueryResponse;
    readonly variables: App_Home_QueryVariables;
};



/*
query App_Home_Query {
  me {
    ...Home_me
  }
}

fragment Home_me on UserInfo {
  nextQuestion {
    id
  }
  user {
    answers {
      id
    }
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
},
v1 = [
  (v0/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "App_Home_Query",
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
            "name": "Home_me",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "App_Home_Query",
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
            "name": "nextQuestion",
            "storageKey": null,
            "args": null,
            "concreteType": "Question",
            "plural": false,
            "selections": (v1/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "answers",
                "storageKey": null,
                "args": null,
                "concreteType": "UserAnswer",
                "plural": true,
                "selections": (v1/*: any*/)
              },
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Home_Query",
    "id": null,
    "text": "query App_Home_Query {\n  me {\n    ...Home_me\n  }\n}\n\nfragment Home_me on UserInfo {\n  nextQuestion {\n    id\n  }\n  user {\n    answers {\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '43f6fc0c31e98e96c81b5c0a329efa14';
export default node;
