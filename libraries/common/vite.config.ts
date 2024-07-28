/// <reference types="vitest" />

import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkgs from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "common",
      fileName: "common",
    },
    rollupOptions: {
      external: Object.keys(pkgs.peerDependencies ?? {}),
      output: {
        // TODO: create a function that calculates globals
        globals: {
          fastify: "Fastify",
        },
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  test: {
    // vitest config here
  },
});
