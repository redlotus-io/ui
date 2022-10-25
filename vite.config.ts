/// <reference types="vitest" />

import path from "path";

import react from "@vitejs/plugin-react";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: "index",
      name: "LotusUI",
    },
    rollupOptions: {
      output: {
        exports: "named",
        sourcemap: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
      plugins: [
        // Automatically externalize peerDependencies in a rollup bundle.
        peerDepsExternal(),
      ],
    },
  },
  publicDir: "public",
  server: {
    host: true,
    port: 3000,
  },
});
