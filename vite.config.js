import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the build works on Vercel,
// Netlify, GitHub Pages or opened from any folder.
export default defineConfig({
  plugins: [react()],
  base: './',
})
