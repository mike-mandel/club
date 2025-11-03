import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/github-pages-example', //Set the base path for Github pages
  plugins: [react()],
})
