/**
 * @generated SignedSource<<cbbfdc2f6a138b77de44b103e80a238a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import userFullNameResolver from "../resolvers/fullNameResolver.js";
export type pagesIndexQuery$variables = {};
export type pagesIndexQuery$data = {
  readonly users: ReadonlyArray<{
    readonly fullName: ReturnType<typeof userFullNameResolver> | null;
    readonly id: string;
  }>;
};
export type pagesIndexQuery = {
  response: pagesIndexQuery$data;
  variables: pagesIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "fragment": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "fullNameResolver"
            },
            "kind": "RelayResolver",
            "name": "fullName",
            "resolverModule": require('./../resolvers/fullNameResolver'),
            "path": "users.fullName"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "users",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "02689c0ddbd9b223d5d0c250c6a103cb",
    "id": null,
    "metadata": {},
    "name": "pagesIndexQuery",
    "operationKind": "query",
    "text": "query pagesIndexQuery {\n  users {\n    id\n    ...fullNameResolver\n  }\n}\n\nfragment fullNameResolver on User {\n  firstName\n  lastName\n}\n"
  }
};
})();

(node as any).hash = "3dddbdfdcd902f7b6392f5441854819b";

export default node;
