// Vite configuration
import { defineConfig } from "vite"

// React plugin
import react from "@vitejs/plugin-react"

// Tailwind plugin
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
