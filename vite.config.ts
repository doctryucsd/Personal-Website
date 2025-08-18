import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If deploying as a user site (repo name YOUR_USERNAME.github.io), keep base as '/'.
// If deploying as a project site (repo name 'portfolio'), change base to '/portfolio/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
