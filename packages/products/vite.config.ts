import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "products",
      fileName: "index",
    },
  },
  plugins: [
    tsconfigPaths({
      parseNative: false,
    }),
  ],
});
