import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  build: {
    ssr: resolve(__dirname, "src/index.ts"),
    outDir: "dist",
    rollupOptions: {
      output: {
        format: "cjs",
      },
    },
  },
  plugins: [
    tsconfigPaths({
      parseNative: false,
    }),
  ],
});
