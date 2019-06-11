/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateList_candidates$ref = any;
export type CandidateList_candidates = ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
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
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '00c3bb72348b39371c6098d7742be206';
export default node;
