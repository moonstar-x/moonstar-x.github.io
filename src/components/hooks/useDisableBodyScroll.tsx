import { useEffect } from 'react';

export const useDisableBodyScroll = (enabled: boolean = true) => {
  useEffect(() => {
    if (enabled) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [enabled]);
};
