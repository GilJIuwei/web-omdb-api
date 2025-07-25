// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/WEBSITE-API-OMDB/",
  plugins: [react()],
});
