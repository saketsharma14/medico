import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

// SWC is needed so decorators emit the metadata NestJS dependency injection relies on.
export default defineConfig({
  test: { include: ["test/**/*.test.ts"] },
  plugins: [swc.vite({ module: { type: "es6" } })],
});
