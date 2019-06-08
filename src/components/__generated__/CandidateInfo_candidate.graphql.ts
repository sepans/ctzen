/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateInfo_candidate$ref = any;
export type CandidateInfo_candidate = {
    readonly name: string | null;
    readonly image: string | null;
    readonly dob: any | null;
    readonly experience: string | null;
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dob",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "experience",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'fdac875564259f50c8c5168514f1bf2c';
export default node;
