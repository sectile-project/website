import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware(({ locals }) => {
  const { entry } = locals.starlightRoute;

  entry.data.banner = {
    content:
      'In early development. Report bugs on our ' +
      '<a href="https://github.com/sectile-project/Sectile" target="_blank" rel="noopener noreferrer">GitHub</a>.',
  };
});
