/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateList_me$ref = any;
export type CandidateList_me = {
    readonly matchingCandidates: ReadonlyArray<{
        readonly score: number | null;
        readonly candidate: {
            readonly id: string | null;
            readonly name: string | null;
            readonly experience: string | null;
            readonly image: string | null;
            readonly state: string | null;
        } | null;
    } | null> | null;
    readonly " $refType": CandidateList_me$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CandidateList_me",
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
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
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
              "name": "experience",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "image",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "state",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '02aaaba11d460b4eccc3a31810c80b25';
export default node;
