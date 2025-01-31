import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure "@" maps to "src"
    },
  },
  build: {
    rollupOptions: {
      external: [], // If needed, manually exclude dependencies
    },
  },
});
