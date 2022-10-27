module.exports = {
  output: 'standalone',
  env: {
    ENV_VARIABLE: process.env.ENV_VARIABLE,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
        loader: 'akamai',
        path: '/',
  }
}
