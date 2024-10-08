import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	prefetch: {
		prefetchAll: false,
	},
	devToolbar: {
		enabled: false,
	},
	image: {},
	integrations: [
		auth(),
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});
