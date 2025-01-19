/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    caseSensitiveRoutes: true
  }
};

export default nextConfig;
