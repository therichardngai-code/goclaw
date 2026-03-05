import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const backendPort = env.VITE_BACKEND_PORT || "9600";
  const backendHost = env.VITE_BACKEND_HOST || "localhost";
  const backend = `http://${backendHost}:${backendPort}`;

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: "/office/",
    server: {
      port: 5174,
      proxy: {
        "/office/events": { target: backend, changeOrigin: true },
        "/office/state": { target: backend, changeOrigin: true },
        "/office/assets": { target: backend, changeOrigin: true },
      },
    },
    build: {
      outDir: "../../internal/office/dist",
      emptyOutDir: true,
      assetsDir: "static",
    },
  };
});
