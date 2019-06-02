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
  +firstName: ?string,
  +lastName: ?string,
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
// prettier-ignore
(node/*: any*/).hash = 'be023ad64bcc1fbe2b7d3954c4ebddcd';
module.exports = node;
