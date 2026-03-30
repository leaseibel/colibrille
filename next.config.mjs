/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Keystatic admin UI
  transpilePackages: ["@keystatic/core", "@keystatic/next"],
};

export default nextConfig;
