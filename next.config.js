/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `https://gittgi.site/:path*`,
      },
    ];
  },
};
