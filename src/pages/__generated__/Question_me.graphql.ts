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
            readonly UserResponse: {
                readonly response: number | null;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": Question_me$ref;
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
      "selections": [
        (v0/*: any*/)
      ]
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
          "selections": [
            (v0/*: any*/),
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
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '50fad5321ee5e7f7187c28cb82d55c2c';
export default node;
