import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
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
