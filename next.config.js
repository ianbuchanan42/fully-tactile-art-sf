/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Necessary for static exports to work properly with images
    remotePatterns: [], // Add any external image domains here if needed
    // Example: { protocol: 'https', hostname: 'example.com' }
  },
  // Optional: Configure trailing slashes for cleaner URLs
  trailingSlash: true,
  // Optimize for static generation
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
