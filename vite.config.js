import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Optimisations de performance
  build: {
    // Optimisation du bundle
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les dépendances lourdes
          "framer-motion": ["framer-motion"],
          "react-vendor": ["react", "react-dom"],
          icons: ["lucide-react", "react-icons"],
          router: ["react-router-dom"],
        },
      },
    },
    // Compression et minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Optimisation CSS
    cssMinify: true,
    // Taille limite des chunks
    chunkSizeWarningLimit: 1000,
  },

  // Optimisations de développement
  server: {
    // Préchargement des modules
    warmup: {
      clientFiles: ["./src/main.jsx", "./src/App.jsx"],
    },
  },

  // Optimisations des assets
  assetsInclude: ["**/*.webp", "**/*.avif"],

  // Préprocesseur CSS optimisé
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
});
