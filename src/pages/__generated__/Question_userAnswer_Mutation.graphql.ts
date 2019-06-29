/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type Question_userAnswer_MutationVariables = {
    readonly userId: string;
    readonly questionId: string;
    readonly response?: number | null;
};
export type Question_userAnswer_MutationResponse = {
    readonly userAnswerQuestion: {
        readonly answers: ReadonlyArray<{
            readonly title: string | null;
            readonly level: number | null;
            readonly UserResponse: {
                readonly response: number | null;
            } | null;
        } | null> | null;
    } | null;
};
export type Question_userAnswer_Mutation = {
    readonly response: Question_userAnswer_MutationResponse;
    readonly variables: Question_userAnswer_MutationVariables;
};



/*
mutation Question_userAnswer_Mutation(
  $userId: ID!
  $questionId: ID!
  $response: Int
) {
  userAnswerQuestion(userId: $userId, questionId: $questionId, response: $response) {
    answers {
      title
      level
      UserResponse {
        response
      }
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "questionId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "response",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "questionId",
    "variableName": "questionId"
  },
  {
    "kind": "Variable",
    "name": "response",
    "variableName": "response"
  },
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "level",
  "args": null,
  "storageKey": null
},
v4 = {
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
v5 = {
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
    "name": "Question_userAnswer_Mutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userAnswerQuestion",
        "storageKey": null,
        "args": (v1/*: any*/),
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
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Question_userAnswer_Mutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userAnswerQuestion",
        "storageKey": null,
        "args": (v1/*: any*/),
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
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "Question_userAnswer_Mutation",
    "id": null,
    "text": "mutation Question_userAnswer_Mutation(\n  $userId: ID!\n  $questionId: ID!\n  $response: Int\n) {\n  userAnswerQuestion(userId: $userId, questionId: $questionId, response: $response) {\n    answers {\n      title\n      level\n      UserResponse {\n        response\n      }\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'df3b9d0f833c29d5122959ed48a5626c';
export default node;
