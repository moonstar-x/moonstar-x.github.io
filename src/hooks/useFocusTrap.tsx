import { useEffect } from 'react';
import type { RefObject } from 'react';

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Moves focus into the container when enabled, keeps Tab cycling inside it, and returns focus to the previously focused element when disabled.
export const useFocusTrap = (containerRef: RefObject<HTMLElement | null>, isEnabled = true): void => {
  useEffect(() => {
    const container = containerRef.current;

    if (!isEnabled || !container) {
      return;
    }

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const getFocusable = (): HTMLElement[] => [...container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)];

    (getFocusable()[0] ?? container).focus({ preventScroll: true });

    const handler = (event: KeyboardEvent): void => {
      if (event.key !== 'Tab') {
        return;
      }

      const focusable = getFocusable();
      const first = focusable[0];
      const last = focusable.at(-1);

      if (!first || !last) {
        event.preventDefault();
        return;
      }

      const { activeElement } = document;

      if (event.shiftKey && (activeElement === first || !container.contains(activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (activeElement === last || !container.contains(activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handler);

    return (): void => {
      document.removeEventListener('keydown', handler);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [containerRef, isEnabled]);
};
