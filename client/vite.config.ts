import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  server: {
    host: true,
    port: 8000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
});
