import { defineConfig, passthroughImageService } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import tailwind from "@astrojs/tailwind"
import auth from "auth-astro"
import react from "@astrojs/react"

export default defineConfig({
	compressHTML: true,
	prefetch: {
		prefetchAll: false,
	},
	devToolbar: {
		enabled: false,
	},
	image: {
		service: passthroughImageService(),
	},
	integrations: [auth(), react(), tailwind()],
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
})
