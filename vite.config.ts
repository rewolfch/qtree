
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './', // Ensure relative paths for single file portability
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000, // Inline everything
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false, // Don't split CSS
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true, // Inline dynamic imports
      output: {
        manualChunks: undefined, // Disable manual chunks
      },
    },
  },
});
