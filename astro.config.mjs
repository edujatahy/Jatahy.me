// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Custom domain jatahy.me is live: base is '/' and public/CNAME pins the domain.
// Internal paths go through import.meta.env.BASE_URL, so this stays a one-liner if it ever changes.
export default defineConfig({
  site: 'https://jatahy.me',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
