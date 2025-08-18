import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change REPO_NAME to your repo (e.g., 'portfolio')
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Personal-Website/' : '/',  // user site: just '/'
  plugins: [react()],
}))
