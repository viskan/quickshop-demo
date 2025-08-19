import { defineConfig } from "vite";

export default defineConfig({
    root: "public",
    publicDir: false,
    appType: "mpa",
    server: {
        open: true,
    },
});
