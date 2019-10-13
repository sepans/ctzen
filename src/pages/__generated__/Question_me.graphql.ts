/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Question_me$ref = any;
export type Question_me = {
    readonly matchingCandidates: ReadonlyArray<{
        readonly score: number | null;
        readonly candidate: {
            readonly name: string | null;
            readonly image: string | null;
        } | null;
    } | null> | null;
    readonly nextQuestion: {
        readonly id: string | null;
    } | null;
    readonly user: {
        readonly answers: ReadonlyArray<{
            readonly id: string | null;
        } | null> | null;
    } | null;
    readonly " $refType": Question_me$ref;
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
  "name": "Question_me",
  "type": "UserInfo",
  "metadata": null,
  "argumentDefinitions": [],
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "image",
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
(node as any).hash = '8ab368eda91e71dfa2cbf740bfbb5822';
export default node;
