import { resolve } from "path";
import { defineConfig } from "vite";
import pkgs from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.js"),
      name: "config-eslint",
      fileName: "index",
    },
    rollupOptions: {
      external: Object.keys(pkgs.peerDependencies ?? {}),
      output: {
        globals: {
          "@eslint/js": "eslint",
          "typescript-eslint": "teslint",
        },
      },
    },
  },
});
