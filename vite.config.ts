import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- To jest OK, jeśli używasz tego pluginu

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- To jest OK
  ],
  // --- POPRAWKA TUTAJ ---
  // Musi pasować do nazwy repozytorium: "Nowa-Ekspresja"
  base: "/Nowa-Ekspresja/", 
})