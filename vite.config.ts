/// <reference types="vitest" />

import path from "path";

import react from "@vitejs/plugin-react";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
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
        name: "Unisub",
        short_name: "Unisub",
        description: "App to manage subscriptions",
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
      name: "RedLotusUI",
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
