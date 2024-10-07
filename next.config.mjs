/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's2.coinmarketcap.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: ''
      }
    ]
  },
  serverRuntimeConfig: {
    apiTimeout: 300
  },
  staticPageGenerationTimeout: 300,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

export default nextConfig;
