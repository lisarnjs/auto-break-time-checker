import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    outDir: "docs", // dist -> docs 변경
    rollupOptions: {
      input: {
        main: "./index.html",
        // github pages는 SPA를 지원하지 않아 새로고침 시 404가 떠서, docs/404.html 파일 자동 생성하게끔 추가해줌.
        404: "./index.html", // 404 페이지도 index.html로 처리
      },
    },
  },
});
