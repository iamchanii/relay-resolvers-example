import { useMemo } from 'react';
import {
  commitLocalUpdate,
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  ROOT_TYPE,
  Store,
} from 'relay-runtime';
import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import type { RecordMap } from 'relay-runtime/lib/store/RelayStoreTypes';

let relayEnvironment: RelayModernEnvironment;

const fetchQuery: FetchFunction = (operation, variables) => {
  return fetch(new URL('/api/graphql', 'http://localhost:3000'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => response.json());
};

const createRelayEnvironment = () => {
  const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });

  return environment;
};

const initEnvironment = (initialRecords?: RecordMap) => {
  const environment = relayEnvironment ?? createRelayEnvironment();

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }

  if (typeof window === 'undefined') {
    return environment;
  }

  if (!relayEnvironment) {
    relayEnvironment = environment;
  }

  return relayEnvironment;
};

export const useEnvironment = (initialRecords?: RecordMap) => {
  const store = useMemo(
    () => initEnvironment(initialRecords),
    [initialRecords],
  );
  return store;
};
