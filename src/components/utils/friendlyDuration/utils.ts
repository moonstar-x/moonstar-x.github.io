import humanizeDuration from 'humanize-duration';
import { CONTENT_LANG } from '@lib/config';
import { str } from '@lib/services/strings';

export const parseDatesToFriendlyDuration = (dateStart?: Date | string, dateEnd?: Date | string): string | null => {
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
