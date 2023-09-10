const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  plugins: [
    ViteHtmlPlugin({
      pages: {
        index: {
          template: 'dist/index.html', // Specify the template HTML file
          filename: 'index.html', // Specify the output filename
        },
        about: {
          template: 'dist/about.html',
          filename: 'about.html',
        },
        tracking: {
          template: 'dist/tracking.html',
          filename: 'tracking.html',
        },
        contact: {
          template: 'dist/contact.html',
          filename: 'contact.html',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}