import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import clerk from 'astro-clerk-auth'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  prefetch: true,
  devToolbar: {
		enabled: false,
	},
  integrations: [clerk(), tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});