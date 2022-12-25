module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    transpilePackages: ["ui"],
  },
  images: {
    domains: ['gitlab.com']
  }
};
