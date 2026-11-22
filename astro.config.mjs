import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // Replace with your real deployment URL to enable the generated sitemap.
  site: 'https://docs.sectile.example',

  integrations: [
    starlight({
      title: '',
      description:
        'The official documentation portal for Sectile — build fast, consistent and maintainable digital products.',
      favicon: '/favicon.svg',

      // We provide our own 404 page in src/content/docs/404.md.
      disable404Route: true,

      // The logo has a dark and a light variant so it stays visible in both themes.
      logo: {
        light: './src/assets/sectile-logo-light.svg',
        dark: './src/assets/sectile-logo-dark.svg',
      },

      sidebar: [
        { label: 'Overview', link: '/' },
        {
          label: 'Part 1 · Introduction',
          items: [{ autogenerate: { directory: '01-introduction' } }],
        },
        {
          label: 'Part 2 · Plugin Fundamentals',
          items: [{ autogenerate: { directory: '02-plugin-fundamentals' } }],
        },
        {
          label: 'Part 3 · Building Gameplay',
          items: [{ autogenerate: { directory: '03-building-gameplay' } }],
        },
        {
          label: 'Part 4 · Networking & Protocol',
          items: [{ autogenerate: { directory: '04-networking-and-protocol' } }],
        },
      ],

      customCss: [
        '@fontsource/dm-sans/latin-400.css',
        '@fontsource/dm-sans/latin-500.css',
        '@fontsource/dm-sans/latin-600.css',
        '@fontsource/dm-sans/latin-700.css',
        '@fontsource/dm-sans/latin-800.css',
        './src/styles/custom.css',
      ],

      // Adds the development notice to every page at build time.
      routeMiddleware: './src/routeData.ts',

      expressiveCode: {
        styleOverrides: {
          borderRadius: '0.75rem',
        },
      },
    }),
  ],
});
