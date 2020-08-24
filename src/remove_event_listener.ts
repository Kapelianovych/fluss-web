import type { AllEventMap } from './types';

/**
 * Removes the event listener in target's event listener list with the same type, callback, and options.
 */
export function removeEventListener<E extends EventTarget>(
  element: E,
  type: AllEventMap<E>,
  listener: EventListener | EventListenerObject,
  options?: boolean | EventListenerOptions
): void {
  element.removeEventListener(type, listener, options);
}
