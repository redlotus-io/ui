/// <reference types="vitest" />

import path from "path";

// import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";
// // import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import typescript2 from "rollup-plugin-typescript2";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// @ts-ignore
// import injectcss from "./injectcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // injectcss(),
    react(),
    tsconfigPaths(),
    checker({ typescript: true }),
  ],
  // @ts-ignore
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
        // dts(),
        // only for type checking
        // {
        //   ...rollupTs({
        //     check: true,
        //     tsconfig: "./tsconfig.rollup.json",
        //     tsconfigOverride: {
        //       noEmits: true,
        //     },
        //   }),
        //   // run before build
        //   enforce: "pre",
        // },
        // typescript({
        //   tsconfig: "./tsconfig.rollup.json",
        // }),
        // Automatically externalize peerDependencies in a rollup bundle.
        peerDepsExternal(),
        // {
        //   ...typescript2(),
        //   apply: "build",
        // },
      ],
    },
  },
  publicDir: "public",
  server: {
    host: true,
    port: 3000,
  },
});
