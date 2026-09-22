export const RouteDefs = {
  home: '/',
  work: '/work',
  contact: '/contact'
} as const;

export const DynamicRouteDefs = {
  workBySlug: (slug: string): string => `${RouteDefs.work}/${slug}`
} as const;

export const RouteHashDefs = {
  experience: '#experience'
} as const;
