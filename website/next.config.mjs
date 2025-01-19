/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    caseSensitiveRoutes: false
  }
};

export default nextConfig;
