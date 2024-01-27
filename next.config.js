/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/apis/:path*",
        headers: [
          // { key: "Access-Control-Expose-Headers", value: "Authorization" },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          // { key: "Access-Control-Allow-Origin", value: "https://simplan-next.vercel.app, http://localhost:3000, https://gittgi.site" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ]
      }
    ]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: `https://gittgi.site/:path*`,
  //     },
  //   ];
  // },
};
