/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["ui"]);
module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ["ui"],
// };

// module.exports = nextConfig;
