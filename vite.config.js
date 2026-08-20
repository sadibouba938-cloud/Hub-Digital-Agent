import { defineConfig } from 'vite';
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4174,
    strictPort: true,
    cors: true,
    allowedHosts: true,
    hmr: { host: 'localhost' },
    headers: { 'X-Frame-Options': 'ALLOWALL' }
  },
  preview: {
    host: '0.0.0.0',
    port: 4174,
    strictPort: true,
    cors: true,
    allowedHosts: true,
    headers: { 'X-Frame-Options': 'ALLOWALL' }
  }
});
