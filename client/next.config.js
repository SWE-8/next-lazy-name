/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    // this will allow nextjs to resolve files (js, ts, css)
    // outside packages/app directory.
    externalDir: true,
  },
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
