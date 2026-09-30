import { useEffect } from 'react';

// iOS Safari ignores `overflow: hidden` on body, so the body is pinned with `position: fixed` instead.
export const useDisableBodyScroll = (isEnabled = true): void => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const { documentElement, body } = document;
    const { scrollTop: scrollY } = documentElement;
    const gutterWidth = window.innerWidth - documentElement.getBoundingClientRect().width;

    documentElement.style.scrollbarGutter = 'auto';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY.toString()}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.paddingRight = `${gutterWidth.toString()}px`;

    return (): void => {
      documentElement.style.scrollbarGutter = '';
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.paddingRight = '';
      window.scrollTo({ top: scrollY, behavior: 'instant' });
    };
  }, [isEnabled]);
};
