import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: import.meta.env.VITE_BASENAME || '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true,
  },
});
