/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Added for Next.js v15 - enables router caching for better performance
  experimental: {
    staleTimes: {
      dynamic: 30, // 30 seconds for dynamic routes
      static: 180,  // 3 minutes for static routes
    }
  }
};

export default nextConfig;
