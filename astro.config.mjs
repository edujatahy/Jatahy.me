// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE: `base` is '/Jatahy.me' so the site previews at the GitHub project Pages URL
// (edujatahy.github.io/Jatahy.me/) before the custom domain is wired. When jatahy.me
// DNS is pointed at Pages, switch `base` to '/' and add public/CNAME. All internal
// asset/link references go through import.meta.env.BASE_URL so the switch is a one-liner.
export default defineConfig({
  site: 'https://jatahy.me',
  base: '/Jatahy.me',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
