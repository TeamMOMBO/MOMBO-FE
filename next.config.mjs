/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
