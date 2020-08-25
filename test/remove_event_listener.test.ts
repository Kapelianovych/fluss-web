import { removeEventListener, querySelector } from '../src';

describe('removeEventListener', () => {
  test('removeEventListener remove listener from element', () => {
    document.body.innerHTML = '<p><p>';

    let event: Event | null = null;

    querySelector<HTMLParagraphElement>('p').map((p) => {
      const listener = (e: MouseEvent) => {
        event = e;
      };

      p.addEventListener('click', listener);
      removeEventListener(p, 'click', listener);

      p.dispatchEvent(new Event('click'));

      expect(event).toBeFalsy();
    });
  });
});
