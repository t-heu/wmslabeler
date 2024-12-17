/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';

const nextPWAConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: !isProduction
};

const nextConfigFromPWA = {
  reactStrictMode: false,
  output: 'export' as const, // Correct value, make sure it's 'export', 'standalone', or undefined
  basePath: !isProduction ? '' : '/wmslabeler'
};

export default  withPWA(nextPWAConfig)(nextConfigFromPWA);
