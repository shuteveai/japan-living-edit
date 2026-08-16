import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://japanlivingedit.com',
  output: 'static',
  integrations: [sitemap()],
});
