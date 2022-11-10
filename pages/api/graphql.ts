import type { NextApiRequest, NextApiResponse } from 'next';
import SchemaBuilder from '@pothos/core';
import { createYoga } from 'graphql-yoga';

class User {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const builder = new SchemaBuilder({});

const UserRef = builder.objectType(User, {
  name: 'User',
  fields: (t) => ({
    id: t.exposeID('id'),
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
  }),
});

builder.queryType({
  fields: (t) => ({
    users: t.field({
      type: [UserRef],
      resolve: () => [
        new User(1, 'Doe', 'John'),
        new User(2, 'Mary', 'Jane'),
        new User(3, 'James', 'Brown'),
      ],
    }),
  }),
});

export default createYoga<{
  req: NextApiRequest;
  es: NextApiResponse;
}>({
  schema: builder.toSchema(),
  graphqlEndpoint: '/api/graphql',
});
