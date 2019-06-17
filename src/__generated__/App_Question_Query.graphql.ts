/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Question_question$ref = any;
export type App_Question_QueryVariables = {
    readonly id: string;
};
export type App_Question_QueryResponse = {
    readonly question: {
        readonly " $fragmentRefs": Question_question$ref;
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
}

fragment Question_question on Question {
  id
  title
  level
  option1
  option2
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "App_Question_Query",
    "id": null,
    "text": "query App_Question_Query(\n  $id: ID!\n) {\n  question(id: $id) {\n    ...Question_question\n    id\n  }\n}\n\nfragment Question_question on Question {\n  id\n  title\n  level\n  option1\n  option2\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'fd7decc064b2dbeb88649e1a072a7b65';
export default node;
