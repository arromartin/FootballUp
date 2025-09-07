/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/routes',
      },
      {
        source: '/squad',
        destination: '/routes/squad',
      },
      {
        source: '/lineup',
        destination: '/routes/lineup',
      },
      {
        source: '/matches',
        destination: '/routes/matches',
      },
    ];
  },
};

export default nextConfig;
