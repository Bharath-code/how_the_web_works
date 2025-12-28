// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import readingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [
    mdx(),
    sitemap(),
    pagefind(),
  ],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@pagefind/default-ui"],
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});