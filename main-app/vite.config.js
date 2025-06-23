import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'mainApp',
      remotes: {
        musicApp: 'http://localhost:5001/assets/remoteEntry.js', // ✅ REMOVE 'musicApp@'
      },
      shared: ['react', 'react-dom']
    }),
  ],
  build: {
    target: 'esnext',
  }
})
