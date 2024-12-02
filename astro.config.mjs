// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
    icon({
      include: {
        heroicons: ["*"],
        // You can add more icon sets here
      }
    }), 
    react()
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});