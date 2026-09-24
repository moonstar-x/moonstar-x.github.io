import { useEffect } from 'react';

export const useDisableBodyScroll = (isEnabled = true): void => {
  useEffect(() => {
    if (isEnabled) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [isEnabled]);
};
