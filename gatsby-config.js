module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-preload-fonts',
      options: {
        fonts: [
          {
            family: 'your-font-family',
            variants: ['300', '400', '500', '600']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-preact',
    },
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmet: false,
      }
    },
    // ... other plugins
  ],
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}; 