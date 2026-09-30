import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {(phase: string) => import('next').NextConfig} */
export default (phase) => ({
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next' : 'build',
  images: {
    unoptimized: true
  },
  devIndicators: false
});
