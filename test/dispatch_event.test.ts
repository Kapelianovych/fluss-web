import { dispatchEvent, querySelector, addEventListener } from '../src';

describe('dispatchEvent', () => {
  test('dispatchEvent dispatches event to element', () => {
    document.body.innerHTML = '<p></p';

    let evt: Event | null = null;

    querySelector<HTMLParagraphElement>('p').map((p) => {
      addEventListener(p, 'click', (event) => (evt = event));

      dispatchEvent(p, new Event('click'));

      expect(evt).toBeTruthy();
    });
  });
});
