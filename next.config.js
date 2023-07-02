const path = require('node:path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {    
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, './src/'),
        '@assets': path.resolve(__dirname, './src/assets/'),
        '@components': path.resolve(__dirname, './src/components/'),
        '@services': path.resolve(__dirname, './src/services/'),
        '@models': path.resolve(__dirname, './src/models/'),
        '@utilities': path.resolve(__dirname, './src/utilities/'),
        '@public': path.resolve(__dirname, './public/')
      }
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/design-system',
        destination: '/design-system/summary', 
        permanent: true,
      },
    ]
  },
  // experimental: {
  //   swcPlugins: [['typewind/swc', {}]],
  // },
}

module.exports = nextConfig
