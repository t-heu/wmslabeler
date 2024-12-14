/*import withPWA from 'next-pwa';
const isProduction = process.env.NODE_ENV === 'production';

const nextPWAConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
};

const nextConfigFromPWA = {
  reactStrictMode: false,
  swcMinify: false,
  output: "export" as const,
  basePath: process.env.B_DEV ? "/out" : '/wmslabeler'
};*/

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export" as const,
  basePath: isProduction ? '/wmslabeler' : ''
};

//const withCustomPWA = withPWA(nextPWAConfig);

// export default isProduction ? withCustomPWA(nextConfigFromPWA) : nextConfig;
export default nextConfig;