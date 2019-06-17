/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Question_question$ref = any;
export type Question_question = {
    readonly id: string | null;
    readonly title: string | null;
    readonly level: number | null;
    readonly option1: string | null;
    readonly option2: string | null;
    readonly " $refType": Question_question$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Question_question",
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
    },
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
      "name": "level",
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
    }
  ]
};
(node as any).hash = 'ed032401bdb51a4e06bedb526b3dc758';
export default node;
