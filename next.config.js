/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "example.com",
      port: "",
      pathname: "/account123/**",
    },
  ],
};

module.exports = nextConfig;
