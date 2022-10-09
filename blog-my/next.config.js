const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
  output: 'standalone',
  env: {
    ENV_VARIABLE: process.env.ENV_VARIABLE,
  },
}

module.exports = withNextra(nextConfig)
