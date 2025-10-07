import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: process.env.VITE_BASE_PATH || "/fm-7-recipe-finder",
  base: process.env.VERCEL ? "/" : "/fm-7-recipe-finder/",
});
