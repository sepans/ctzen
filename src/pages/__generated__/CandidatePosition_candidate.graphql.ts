/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type CandidateInfo_candidate$ref = any;
export type CandidatePosition_candidate$ref = any;
export type CandidatePosition_candidate = {
    readonly image: string | null;
    readonly answers: ReadonlyArray<{
        readonly title: string | null;
        readonly option1: string | null;
        readonly option2: string | null;
        readonly option3: string | null;
        readonly option4: string | null;
        readonly option5: string | null;
        readonly CandidateResponse: {
            readonly response: number | null;
        } | null;
    } | null> | null;
    readonly " $fragmentRefs": CandidateInfo_candidate$ref;
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "answers",
      "storageKey": null,
      "args": null,
      "concreteType": "CandidateAnswer",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "option1",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "option2",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "option3",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "option4",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "option5",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "CandidateResponse",
          "storageKey": null,
          "args": null,
          "concreteType": "AnswerPick",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "response",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "CandidateInfo_candidate",
      "args": null
    }
  ]
};
(node as any).hash = '5e8cedf85396b624bf18aedeb5609035';
export default node;
