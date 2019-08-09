/* tslint:disable */

import { ConcreteRequest } from 'relay-runtime'
type CandidateInfo_candidate$ref = any
export type CandidateInfo_QueryVariables = {
  readonly id: string
}
export type CandidateInfo_QueryResponse = {
  readonly candidate: {
    readonly ' $fragmentRefs': CandidateInfo_candidate$ref
  } | null
}
export type CandidateInfo_Query = {
  readonly response: CandidateInfo_QueryResponse
  readonly variables: CandidateInfo_QueryVariables
}

/*
query CandidateInfo_Query(
  $id: ID!
) {
  candidate(id: $id) {
    ...CandidateInfo_candidate
    id
  }
}

fragment CandidateInfo_candidate on Candidate {
  name: displayName
  image
  dob
  state
  pob
  experience
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'id',
        type: 'ID!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
      },
    ],
    v2 = {
      type: 'String',
      enumValues: null,
      plural: false,
      nullable: true,
    }
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'CandidateInfo_Query',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'candidate',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'Candidate',
          plural: false,
          selections: [
            {
              kind: 'FragmentSpread',
              name: 'CandidateInfo_candidate',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'CandidateInfo_Query',
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'candidate',
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: 'Candidate',
          plural: false,
          selections: [
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
              name: 'image',
              args: null,
              storageKey: null,
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'dob',
              args: null,
              storageKey: null,
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'state',
              args: null,
              storageKey: null,
            },
            {
              kind: 'ScalarField',
              alias: null,
              name: 'pob',
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
              name: 'id',
              args: null,
              storageKey: null,
            },
          ],
        },
      ],
    },
    params: {
      operationKind: 'query',
      name: 'CandidateInfo_Query',
      id: null,
      text:
        'query CandidateInfo_Query(\n  $id: ID!\n) {\n  candidate(id: $id) {\n    ...CandidateInfo_candidate\n    id\n  }\n}\n\nfragment CandidateInfo_candidate on Candidate {\n  name: displayName\n  image\n  dob\n  state\n  pob\n  experience\n}\n',
      metadata: {
        relayTestingSelectionTypeInfo: {
          candidate: {
            type: 'Candidate',
            enumValues: null,
            plural: false,
            nullable: true,
          },
          'candidate.id': {
            type: 'ID',
            enumValues: null,
            plural: false,
            nullable: true,
          },
          'candidate.name': v2 /*: any*/,
          'candidate.image': v2 /*: any*/,
          'candidate.dob': {
            type: 'Date',
            enumValues: null,
            plural: false,
            nullable: true,
          },
          'candidate.state': v2 /*: any*/,
          'candidate.pob': v2 /*: any*/,
          'candidate.experience': v2 /*: any*/,
        },
      },
    },
  }
})()
;(node as any).hash = '0dfce61c4947bec7f308c7672f0159bf'
export default node
