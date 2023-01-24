/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fitzy.vercel.app", "yt4.ggpht.com"],
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
