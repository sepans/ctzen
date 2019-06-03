/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateInfo_candidate$ref = any;
export type CandidateInfo_candidate = {
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly age: number | null;
    readonly " $refType": CandidateInfo_candidate$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CandidateInfo_candidate",
  "type": "Candidate",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "age",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'be023ad64bcc1fbe2b7d3954c4ebddcd';
export default node;
