import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/typescript-openapi-generator-docs/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
