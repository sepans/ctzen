/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CandidateInfo_candidate$ref: FragmentReference;
declare export opaque type CandidateInfo_candidate$fragmentType: CandidateInfo_candidate$ref;
export type CandidateInfo_candidate = {|
  +name: ?string,
  +age: ?number,
  +$refType: CandidateInfo_candidate$ref,
|};
export type CandidateInfo_candidate$data = CandidateInfo_candidate;
export type CandidateInfo_candidate$key = {
  +$data?: CandidateInfo_candidate$data,
  +$fragmentRefs: CandidateInfo_candidate$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CandidateInfo_candidate",
  "type": "Candidate",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
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
// prettier-ignore
(node/*: any*/).hash = 'b9a0327e2f743d3d728834961d3192cc';
module.exports = node;
