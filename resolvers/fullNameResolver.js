import { graphql } from 'relay-runtime';
import { readFragment } from 'relay-runtime/lib/store/ResolverFragments';

/**
 * @RelayResolver
 * 
 * @fieldName fullName
 * @onType User
 * @rootFragment fullNameResolver
 */
export default function fullNameResolver(
  /** @type import('../generated/fullNameResolver.graphql').fullNameResolver$key */
  fragmentRef,
) {
  const data = readFragment(
    graphql`
      fragment fullNameResolver on User {
        firstName
        lastName
      } 
    `,
    fragmentRef,
  );

  return [data.lastName, data.firstName, '(Generated)'].join(' ');
}
