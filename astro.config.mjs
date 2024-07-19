import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import tailwind from "@astrojs/tailwind"
import auth from "auth-astro"

export default defineConfig({
	compressHTML: true,
	prefetch: {
		defaultStrategy: "viewport",
	},
	devToolbar: {
		enabled: false,
	},
	integrations: [auth(), tailwind()],
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
})
