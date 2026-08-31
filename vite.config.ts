import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("src/data/blogPosts")) return "blog-data";
          if (!id.includes("node_modules")) return undefined;
          if (/node_modules\/(react|react-dom|scheduler|react-router|react-router-dom)\//.test(id))
            return "react-vendor";
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("@radix-ui") || id.includes("lucide-react")) return "ui-vendor";
          return undefined;
        },
      },
    },
  },
  // react-helmet-async ships CommonJS; bundle it into the SSR build so the
  // prerender script can import its named exports.
  ssr: {
    noExternal: ["react-helmet-async"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
}));
