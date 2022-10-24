/// <reference types="vitest" />

import path from "path";

import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";
// import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
// import rollupTs from "rollup-plugin-typescript2";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// @ts-ignore
import injectcss from "./injectcss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    injectcss(),
    react(),
    tsconfigPaths(),
    checker({ typescript: true }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "favicon.ico",
        "apple-touch-icon.png",
        "android-chrome-192x192",
        "android-chrome-512x512",
      ],
      manifest: {
        start_url: ".",
        name: "Reactify",
        short_name: "Reactify",
        description: "Boilerplate to get started fast",
        theme_color: "#282c31",
        background_color: "#282c31",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
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
      formats: ["es"],
    },
    rollupOptions: {
      // preserveModules: true,
      external: ["react", "react-dom"],
      output: {
        exports: "named",
        sourcemap: true,
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
        typescript({
          tsconfig: "./tsconfig.rollup.json",
        }),
        json(),
        terser(),
        resolve(),
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
