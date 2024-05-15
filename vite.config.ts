import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		server: {
			port: 3000,
			host: "0.0.0.0",
		},
		preview: {
			port: 3000,
		},

		resolve: {
			alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
		},
		plugins: [react(), TanStackRouterVite(), svgr()],
		build: {
			target: "esnext",
		},
	}

});
