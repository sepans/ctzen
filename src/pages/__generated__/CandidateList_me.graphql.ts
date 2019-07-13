/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CandidateList_me$ref = any;
export type CandidateList_me = {
    readonly nextQuestion: {
        readonly id: string | null;
    } | null;
    readonly " $refType": CandidateList_me$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CandidateList_me",
  "type": "UserNextQuestion",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "nextQuestion",
      "storageKey": null,
      "args": null,
      "concreteType": "Question",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '04ecaf345dfc6d26622c83f98745031a';
export default node;
