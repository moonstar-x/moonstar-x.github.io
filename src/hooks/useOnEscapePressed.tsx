import { useEffect } from 'react';

export const useOnEscapePressed = (function_: VoidFunction, isEnabled = true): void => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const handler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        function_();
      }
    };

    document.addEventListener('keydown', handler);

    return (): void => {
      document.removeEventListener('keydown', handler);
    };
  }, [function_, isEnabled]);
};
