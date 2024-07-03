import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import clerk from 'astro-clerk-auth'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), tailwind()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});