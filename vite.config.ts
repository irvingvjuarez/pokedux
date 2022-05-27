import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "/src",
      filename: "sw.ts",
      strategies: "injectManifest",
      manifest: {
        name: "Pokedux",
        short_name: "Pokedux",
        theme_color: "#fff",
        icons: [
          {
            src: "/icon192.png",
            type: "image/png",
            sizes: "192x192"
          },
          {
            src: "/icon512.png",
            type: "image/png",
            sizes: "512x512"
          },
          {
            src: "/icon512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "any maskable"
          }
        ],
        start_url: "/",
        background_color: "#fff",
        display: "standalone",
        scope: "/",
        related_applications: [],
        prefer_related_applications: false
      }
    })
  ]
})
