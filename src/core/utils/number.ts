export const compactNumber = (value: number): string => new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 2
}).format(value);

export const padNumber = (value: number, length = 2): string => value.toString().padStart(length, '0');
