/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateList_myNextQuestion$ref = any;
export type CandidateList_myNextQuestion = {
    readonly id: string | null;
    readonly " $refType": CandidateList_myNextQuestion$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CandidateList_myNextQuestion",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'a12ac04f5e97eafa7e1b7c524ecbf4f9';
export default node;
