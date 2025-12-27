// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import readingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});