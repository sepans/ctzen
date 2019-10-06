/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Question_question$ref = any;
export type Question_question = {
    readonly id: string | null;
    readonly title: string | null;
    readonly level: number | null;
    readonly option1: string | null;
    readonly option2: string | null;
    readonly option3: string | null;
    readonly option4: string | null;
    readonly option5: string | null;
    readonly category: string | null;
    readonly subcategory: string | null;
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
      "kind": "ScalarField",
      "alias": null,
      "name": "category",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "subcategory",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'c6fb0dc50fd8e3d1ca98fb81449c77ab';
export default node;
