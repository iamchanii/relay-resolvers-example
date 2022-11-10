/**
 * @generated SignedSource<<8cd1b725bfc2271597af018ec1e9e066>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesIndexQuery$variables = {};
export type pagesIndexQuery$data = {
  readonly users: ReadonlyArray<{
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
  }>;
};
export type pagesIndexQuery = {
  response: pagesIndexQuery$data;
  variables: pagesIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesIndexQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a86de40aec150ab07f4135debe3a3995",
    "id": null,
    "metadata": {},
    "name": "pagesIndexQuery",
    "operationKind": "query",
    "text": "query pagesIndexQuery {\n  users {\n    id\n    lastName\n    firstName\n  }\n}\n"
  }
};
})();

(node as any).hash = "c6c3452ef6456b71503c02d716c531e8";

export default node;
