/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Home_candidates$ref = any;
export type Home_candidates = ReadonlyArray<{
    readonly id: string | null;
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly " $refType": Home_candidates$ref;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Home_candidates",
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
      "alias": null,
      "name": "firstName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lastName",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'c61bcb9a786b897e964639f307f09f0e';
export default node;
