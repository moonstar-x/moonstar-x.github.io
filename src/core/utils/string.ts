export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export const simplifyUrl = (url: string): string => url.replace(/https?:\/\/(?:www.)?/u, '');
