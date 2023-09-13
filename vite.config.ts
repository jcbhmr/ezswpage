import { defineConfig } from "vite";
import { copyFile } from "node:fs/promises";

// https://github.com/vitejs/vite/discussions/9217#discussioncomment-4188099
function myPlugin() {
  return {
    name: "my-plugin",
    async closeBundle() {
      // This is easier than trying to mess with a testing server.
      await copyFile("dist/index.min.js", "test/ezswpage.min.js");
      console.debug("Copied to test/ezswpage.min.js");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["iife"],
      name: "ezswpage",
      fileName: () => "index.min.js",
    },
  },
  plugins: [myPlugin()],
});
