import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aligolestaneh.com",
  trailingSlash: "always",
  output: "static",
  build: {
    format: "directory"
  }
});
