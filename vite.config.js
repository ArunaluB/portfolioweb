import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-work-app/",
  plugins: [react()],
  server: {
    port: 8000
  }
})
