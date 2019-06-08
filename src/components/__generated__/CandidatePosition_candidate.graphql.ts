/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidatePosition_candidate$ref = any;
export type CandidatePosition_candidate = {
    readonly image: string | null;
    readonly " $refType": CandidatePosition_candidate$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CandidatePosition_candidate",
  "type": "Candidate",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '6b889074026304566653982536f98cdc';
export default node;
