import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astrofy-template.netlify.app",
  i18n: {
    defaultLocale: "kr",
    locales: ["en", "kr"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [mdx(), sitemap(), tailwind()],
});
