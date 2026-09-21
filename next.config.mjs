/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true
  },
  devIndicators: false
};

export default config;
