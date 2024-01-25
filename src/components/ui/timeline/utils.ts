import humanizeDuration from 'humanize-duration';
import { str } from '@lib/services/strings';
import { CONTENT_LANG } from '@lib/config';

export const parseDatesToFriendlyDuration = (dateStart?: string, dateEnd?: string): string | null => {
  const startAsDate = dateStart ? new Date(dateStart) : null;
  const endAsDate = dateEnd ? new Date(dateEnd) : new Date();

  const duration = startAsDate ? endAsDate.getTime() - startAsDate.getTime() : null;

  return duration ?
    humanizeDuration(duration, {
      language: CONTENT_LANG,
      units: ['y', 'mo'],
      round: true,
      conjunction: str('misc.humanize_duration.conjunction')
    }) : null;
};

export const timeFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long'
};
