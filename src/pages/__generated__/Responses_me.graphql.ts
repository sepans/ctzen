/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Responses_me$ref = any;
export type Responses_me = {
    readonly id: string | null;
    readonly answers: ReadonlyArray<{
        readonly UserResponse: {
            readonly response: number | null;
        } | null;
        readonly id: string | null;
        readonly title: string | null;
        readonly option1: string | null;
        readonly option2: string | null;
        readonly option3: string | null;
        readonly option4: string | null;
        readonly option5: string | null;
    } | null> | null;
    readonly " $refType": Responses_me$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Responses_me",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
        (v0/*: any*/),
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
};
})();
(node as any).hash = 'afb52a28cbcb856b105f339596f09ab0';
export default node;
