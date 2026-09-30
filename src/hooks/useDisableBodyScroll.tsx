import { useEffect } from 'react';

export const useDisableBodyScroll = (isEnabled = true): void => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const { documentElement, body } = document;
    const gutterWidth = window.innerWidth - documentElement.getBoundingClientRect().width;

    documentElement.style.scrollbarGutter = 'auto';
    body.style.overflowY = 'hidden';
    body.style.paddingRight = `${gutterWidth.toString()}px`;

    return (): void => {
      documentElement.style.scrollbarGutter = '';
      body.style.overflowY = '';
      body.style.paddingRight = '';
    };
  }, [isEnabled]);
};
