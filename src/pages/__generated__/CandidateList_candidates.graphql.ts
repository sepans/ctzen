/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateList_candidates$ref = any;
export type CandidateList_candidates = ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
    readonly experience: string | null;
    readonly image: string | null;
    readonly " $refType": CandidateList_candidates$ref;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CandidateList_candidates",
  "type": "Candidate",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
    }
  ]
};
(node as any).hash = 'e20d9c66de2b5e2cf1915cb3fdf0a1e6';
export default node;
