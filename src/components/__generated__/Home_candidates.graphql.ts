/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Home_candidates$ref = any;
export type Home_candidates = ReadonlyArray<{
    readonly id: string | null;
    readonly name: string | null;
    readonly image: string | null;
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
(node as any).hash = '9092dede12214f46af3b0d89b3163580';
export default node;
