import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "docs", // Изменяем папку для сборки проекта
  },
  base: "/bivouac95/elib/", // Заменяйте на свое имя пользователя и имя репозитория
});
