/**
 * Dispatches a synthetic event event to element and returns true if
 * either event's cancelable attribute value is false or its preventDefault()
 * method was not invoked, and false otherwise.
 */
export function dispatchEvent<E extends EventTarget>(
  element: E,
  event: Event
): boolean {
  return element.dispatchEvent(event);
}
