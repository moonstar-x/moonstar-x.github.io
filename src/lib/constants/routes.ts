export const RouteDefs = {
  home: '/',
  about: '/about',
  work: '/work',
  workBySlug: (slug: string) => `/work/${slug}`,
  blog: '/blog',
  postBySlug: (slug: string) => `/blog/${slug}`,
  contact: '/#contact'
};
