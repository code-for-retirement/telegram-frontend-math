import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite()
  ],
  build: {
    outDir: 'docs'
  },
  // @ts-ignore
  base: '/telegram-frontend-math/',
  server: {
    fs: {
      allow: ['../sdk', './'],
    },
  },
})
