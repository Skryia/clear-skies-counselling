import { resolve } from "path";
import { defineConfig } from "vite";

// Plain static multi-page site. Vite is used only as a dev server and
// optional bundler. The source HTML/CSS/JS files can also be uploaded
// directly to any static host (e.g. GitHub Pages) without a build step.
export default defineConfig({
  server: { host: true, port: 8080 },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});