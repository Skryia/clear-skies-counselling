// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable the Cloudflare/nitro deploy bundler — the site is built as a
  // fully static SPA (HTML + JS + CSS) and served by any static host such
  // as GitHub Pages. Vite still emits the SSR bundle the prerender step
  // needs into `dist/server/`, and the static client output goes to
  // `dist/client/`.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every discoverable route to plain HTML. Output is written
    // to `dist/client/` and can be served by any static host (GitHub Pages,
    // S3, Netlify static, etc.).
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
