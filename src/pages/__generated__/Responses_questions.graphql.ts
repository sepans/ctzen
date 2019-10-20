/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Responses_questions$ref = any;
export type Responses_questions = ReadonlyArray<{
    readonly id: string | null;
    readonly title: string | null;
    readonly option1: string | null;
    readonly option2: string | null;
    readonly option3: string | null;
    readonly option4: string | null;
    readonly option5: string | null;
    readonly " $refType": Responses_questions$ref;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Responses_questions",
  "type": "Question",
  "metadata": {
    "plural": true
  },
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
    }
  ]
};
(node as any).hash = 'e87dd98e2b637ef46b23d1e6a3db8661';
export default node;
