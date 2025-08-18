import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',            // keep root base for local dev & local preview
  plugins: [react()],
})
