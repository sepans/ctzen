/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateList_candidates$ref = any;
export type CandidateList_candidates = ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
    readonly experience: string | null;
    readonly image: string | null;
    readonly state: string | null;
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "state",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'b99da946ab93399db71043649ae24f44';
export default node;
