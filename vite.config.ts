
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
    react({
      // Use more efficient SWC transform options
      jsxImportSource: undefined,
      plugins: [],
      tsDecorators: false,
    }),
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
    esbuildOptions: {
      target: 'esnext',
      minify: mode === 'development' ? false : true,
    },
  },
  build: {
    // Don't clear the output directory on each build
    emptyOutDir: false,
    // Reduce chunk size for better memory usage during builds
    rollupOptions: {
      external: ['stream', 'timers', 'events', 'http', 'https', 'url', 'buffer'], // Explicitly mark these as external
      output: {
        manualChunks: (id) => {
          // Create smaller, more focused chunks
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('@radix-ui')) return 'vendor-radix';
            if (id.includes('@tanstack')) return 'vendor-tanstack';
            if (id.includes('lucide')) return 'vendor-lucide';
            if (id.includes('recharts')) return 'vendor-recharts';
            if (id.includes('date-fns')) return 'vendor-date-fns';
            return 'vendor'; // All other dependencies
          }
        }
      },
    },
    sourcemap: mode === 'development' ? 'inline' : false, // Use inline sourcemaps in dev to save disk I/O
    minify: mode === 'development' ? false : 'terser', // Skip minification in dev mode
    target: 'esnext', // Target modern browsers for better optimization
    cssMinify: mode === 'development' ? false : true, // Skip CSS minification in dev mode
    reportCompressedSize: false, // Skip reporting compressed size to save memory
    chunkSizeWarningLimit: 2000, // Increase chunk size warning limit
    assetsInlineLimit: 4096, // Limit size of inlined assets
    commonjsOptions: {
      transformMixedEsModules: true, // Help with mixed ES modules
    },
  },
  css: {
    // Simplify CSS processing in development
    devSourcemap: mode === 'development',
  },
  // Set memory limit for node process
  define: {
    // Lower memory limit for development builds
    'process.env.NODE_OPTIONS': mode === 'development' 
      ? '"--max-old-space-size=2048"' 
      : '"--max-old-space-size=4096"',
  },
}));
