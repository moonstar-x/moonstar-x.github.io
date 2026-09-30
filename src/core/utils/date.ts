export const digitDate = (value: Date): string => new Intl.DateTimeFormat('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit',
  timeZone: 'UTC'
}).format(value);
