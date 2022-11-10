/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      src: 'src',
      language: 'typescript',
      artifactDirectory: 'generated',
    },
  },
};

module.exports = nextConfig;
