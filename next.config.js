/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static exports for better SEO
  output: 'standalone',
  // Optimize for production
  reactStrictMode: true,
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig
