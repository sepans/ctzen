/* tslint:disable */

import { ReaderFragment } from 'relay-runtime'
type CandidateInfo_candidate$ref = any
export type CandidatePosition_candidate$ref = any
export type CandidatePosition_candidate = {
  readonly image: string | null
  readonly ' $fragmentRefs': CandidateInfo_candidate$ref
  readonly ' $refType': CandidatePosition_candidate$ref
}

const node: ReaderFragment = {
  kind: 'Fragment',
  name: 'CandidatePosition_candidate',
  type: 'Candidate',
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      name: 'image',
      args: null,
      storageKey: null,
    },
    {
      kind: 'FragmentSpread',
      name: 'CandidateInfo_candidate',
      args: null,
    },
  ],
}
;(node as any).hash = '1084029635bc279a75d3b8369e774a0c'
export default node
