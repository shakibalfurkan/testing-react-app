/// <reference types="vitest"/>
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTest.ts", // Optional: setup file
    include: [
      // Comprehensive test file pattern
      "**/*.{test,spec}.{ts,tsx}", // Matches test files anywhere
      "**/__tests__/**/*.{ts,tsx}", // Still includes __tests__ folder
    ],
    exclude: ["**/node_modules/**", "**/dist/**", "**/cypress/**", "**/e2e/**"],
  },
});
