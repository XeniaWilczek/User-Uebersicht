import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Definiert @ als Abkürzung für den src-Ordner
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/user-uebersicht/",
  css: {
    preprocessorOptions: {
      scss: {
        // Lädt die Partials global ohne Namespace (as *)
        // Wichtig: Semikolon am Ende jeder Zeile innerhalb des Strings!
        additionalData: `
          @use "@/variables" as *;
          @use "@/mixins" as *;
        `,
      },
    },
  },
});
