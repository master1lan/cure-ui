import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [peerDepsExternal(), react()],
  root: resolve(__dirname, "test"),
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "demo-ui",
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
    // rollupOptions: {
    //   // 确保外部化处理那些你不想打包进库的依赖
    //   external: ["react", "react-dom"],
    //   output: {
    //     globals: {
    //       react: "React",
    //       "react-dom": "react-dom",
    //     },
    //   },
    //   // todo lib代码需要压缩，最好提供esm版本的代码
    // },
    outDir: resolve(__dirname, "lib"),
    emptyOutDir: true,
  },
});
