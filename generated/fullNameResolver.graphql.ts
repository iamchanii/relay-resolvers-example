/**
 * @generated SignedSource<<64af22e8755c71dafea217c2ad001703>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fullNameResolver$data = {
  readonly firstName: string;
  readonly lastName: string;
  readonly " $fragmentType": "fullNameResolver";
};
export type fullNameResolver$key = {
  readonly " $data"?: fullNameResolver$data;
  readonly " $fragmentSpreads": FragmentRefs<"fullNameResolver">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "fullNameResolver",
  "selections": [
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "09cd77ecd4e893206b62f7853d6796af";

export default node;
