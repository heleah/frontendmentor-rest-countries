/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  httpAgentOptions: {
    keepAlive: false,
  },
};

module.exports = nextConfig;
