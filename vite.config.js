import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
import { imagetools } from "vite-imagetools";
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
});
