import type { WorkLink } from '@core/services/data/work';
import type { WorkType } from '@core/services/data/work-type';

export const UmamiEvents = {
  copyEmail: 'copy-email',
  writeEmail: 'write-email',
  contactCta: 'contact-cta',
  socialLink: 'social-link',
  workFilter: 'work-filter',
  workLink: 'work-link',
  nextArticle: 'next-article',
  copyCode: 'copy-code',
  expandImage: 'expand-image',
  notFoundLink: 'not-found-link'
} as const;
export type UmamiEvent = typeof UmamiEvents[keyof typeof UmamiEvents];

export type ContactCtaLocation = 'home-footer' | 'home-hero' | 'navbar' | 'work-footer';
export type SocialLinkLocation = 'contact' | 'error-footer' | 'home-footer' | 'work-footer';

interface UmamiEventDataMap {
  'contact-cta': { location: ContactCtaLocation };
  'copy-code': undefined;
  'copy-email': undefined;
  'expand-image': undefined;
  'next-article': { slug: string };
  'not-found-link': { destination: string };
  'social-link': { location: SocialLinkLocation; platform: string };
  'work-filter': { filter: 'all' | WorkType };
  'work-link': { slug: string; type: WorkLink };
  'write-email': undefined;
}

export type UmamiEventData<E extends UmamiEvent> = UmamiEventDataMap[E];

export type UmamiEventAttributes = Record<`data-umami-event-${string}`, string> & {
  'data-umami-event': UmamiEvent;
};

type UmamiEventArgs<E extends UmamiEvent> = UmamiEventData<E> extends undefined ? [] : [data: UmamiEventData<E>];

/**
 * Builds the `data-umami-event` attributes Umami reads to track clicks on links and buttons.
 * Spread the result onto the element that should be tracked.
 */
export const umamiEvent = <E extends UmamiEvent>(event: E, ...[data]: UmamiEventArgs<E>): UmamiEventAttributes => {
  const attributes: UmamiEventAttributes = { 'data-umami-event': event };
  const entries = Object.entries(data ?? {});

  for (const [key, value] of entries) {
    attributes[`data-umami-event-${key}`] = String(value);
  }

  return attributes;
};
