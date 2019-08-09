/* tslint:disable */

import { ConcreteRequest } from 'relay-runtime'
type CandidateList_candidates$ref = any
export type CandidateList_QueryVariables = {}
export type CandidateList_QueryResponse = {
  readonly candidates: ReadonlyArray<{
    readonly ' $fragmentRefs': CandidateList_candidates$ref
  } | null> | null
}
export type CandidateList_Query = {
  readonly response: CandidateList_QueryResponse
  readonly variables: CandidateList_QueryVariables
}

/*
query CandidateList_Query {
  candidates {
    ...CandidateList_candidates
    id
  }
}

fragment CandidateList_candidates on Candidate {
  id
  name: displayName
  experience
  image
}
*/

const node: ConcreteRequest = {
  kind: 'Request',
  fragment: {
    kind: 'Fragment',
    name: 'CandidateList_Query',
    type: 'Query',
    metadata: null,
    argumentDefinitions: [],
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'candidates',
        storageKey: null,
        args: null,
        concreteType: 'Candidate',
        plural: true,
        selections: [
          {
            kind: 'FragmentSpread',
            name: 'CandidateList_candidates',
            args: null,
          },
        ],
      },
    ],
  },
  operation: {
    kind: 'Operation',
    name: 'CandidateList_Query',
    argumentDefinitions: [],
    selections: [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'candidates',
        storageKey: null,
        args: null,
        concreteType: 'Candidate',
        plural: true,
        selections: [
          {
            kind: 'ScalarField',
            alias: null,
            name: 'id',
            args: null,
            storageKey: null,
          },
          {
            kind: 'ScalarField',
            alias: 'name',
            name: 'displayName',
            args: null,
            storageKey: null,
          },
          {
            kind: 'ScalarField',
            alias: null,
            name: 'experience',
            args: null,
            storageKey: null,
          },
          {
            kind: 'ScalarField',
            alias: null,
            name: 'image',
            args: null,
            storageKey: null,
          },
        ],
      },
    ],
  },
  params: {
    operationKind: 'query',
    name: 'CandidateList_Query',
    id: null,
    text:
      'query CandidateList_Query {\n  candidates {\n    ...CandidateList_candidates\n    id\n  }\n}\n\nfragment CandidateList_candidates on Candidate {\n  id\n  name: displayName\n  experience\n  image\n}\n',
    metadata: {},
  },
}
;(node as any).hash = '50c1f1b4cb89a365a1f603aa5d7889e8'
export default node
