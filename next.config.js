/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? '/repo' : '';

const nextConfig = {
  reactStrictMode: true,
  // basePath,
  // assetPrefix: `${basePath}/`
}

module.exports = nextConfig
