import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // El plugin de Tailwind v4 procesa las clases de utilidad durante el build.
  plugins: [react(), tailwindcss()],
})
