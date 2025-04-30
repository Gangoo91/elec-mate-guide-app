
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['rss-parser'], // Exclude problematic package from pre-bundling
  },
  build: {
    rollupOptions: {
      external: ['stream', 'timers', 'events', 'http', 'https', 'url', 'buffer'], // Explicitly mark these as external
      output: {
        manualChunks: {
          // Split large dependencies into separate chunks
          react: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          query: ['@tanstack/react-query'],
        }
      },
    },
    sourcemap: mode === 'production' ? false : true, // Disable source maps in production for better performance
    minify: 'terser', // Use terser for better minification
    target: 'esnext', // Target modern browsers for better optimization
    chunkSizeWarningLimit: 2000, // Increase chunk size warning limit
    assetsInlineLimit: 4096, // Limit size of inlined assets
    commonjsOptions: {
      transformMixedEsModules: true, // Help with mixed ES modules
    },
  },
  // Increase memory limit for node process
  define: {
    'process.env.NODE_OPTIONS': '"--max-old-space-size=4096"',
  },
}));
