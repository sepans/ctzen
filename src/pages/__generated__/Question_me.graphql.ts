/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Question_me$ref = any;
export type Question_me = {
    readonly matchingCandidates: ReadonlyArray<{
        readonly score: number | null;
        readonly candidate: {
            readonly name: string | null;
        } | null;
    } | null> | null;
    readonly user: {
        readonly answers: ReadonlyArray<{
            readonly id: string | null;
        } | null> | null;
    } | null;
    readonly " $refType": Question_me$ref;
};



const node: ReaderFragment = {
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
            }
          ]
        }
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'aaaa9a571adc834f6b90343bed10e502';
export default node;
