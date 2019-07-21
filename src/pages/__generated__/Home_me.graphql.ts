/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Home_me$ref = any;
export type Home_me = {
    readonly nextQuestion: {
        readonly id: string | null;
    } | null;
    readonly user: {
        readonly answers: ReadonlyArray<{
            readonly id: string | null;
        } | null> | null;
    } | null;
    readonly " $refType": Home_me$ref;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "Home_me",
  "type": "UserInfo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "nextQuestion",
      "storageKey": null,
      "args": null,
      "concreteType": "Question",
      "plural": false,
      "selections": (v0/*: any*/)
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
          "selections": (v0/*: any*/)
        }
      ]
    }
  ]
};
})();
(node as any).hash = '66240a496927cfef85bc31f1490751f8';
export default node;
