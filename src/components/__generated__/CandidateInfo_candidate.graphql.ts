/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateInfo_candidate$ref = any;
export type CandidateInfo_candidate = {
    readonly name: string | null;
    readonly image: string | null;
    readonly dob: any | null;
    readonly state: string | null;
    readonly pob: string | null;
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
      "name": "state",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pob",
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
(node as any).hash = '51a758a3f9c7bb36d5da104998aa3829';
export default node;
