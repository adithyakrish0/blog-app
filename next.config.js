/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig