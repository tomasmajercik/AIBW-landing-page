import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Firebase Hosting servíruje priečinok "dist" - preto ho tu necháme tak, ako je.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
