import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        service: resolve(__dirname, 'src/service.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        tracking: resolve(__dirname, 'src/tracking.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
});
