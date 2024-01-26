/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/apis/v2/:path*',
        destination: `https://gittgi.site/:path*`,
      },
    ];
  },
};
