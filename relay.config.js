module.exports = {
  src: '.',
  language: 'typescript',
  schema: './schema.graphql',
  exclude: ['**/node_modules/**', './generated/**'],
  artifactDirectory: './generated',
  featureFlags: {
    enable_relay_resolver_transform: true,
  },
};
