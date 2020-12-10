import { maybe } from '@fluss/core';
import { on, query } from '../build';

describe('on', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="first"></div>
      <div class="second"></div>
    `;
  });

  test('on adds listener to element', () => {
    let event = null;

    query('.first').map((element) => {
      on(element, 'fullscreenchange', (evt) => {
        event = evt;
      });

      element.dispatchEvent(new Event('fullscreenchange'));

      expect(event).toBeTruthy();
    });
  });

  test('on adds listener to maybe element', () => {
    let event = null;

    query('.first', maybe(document)).map((element) => {
      on(element, 'fullscreenchange', (evt) => {
        event = evt;
      });

      element.dispatchEvent(new Event('fullscreenchange'));

      expect(event).toBeTruthy();
    });
  });

  test('on returns function that remove previously added listener', () => {
    let event = null;

    query('.second').map((element) => {
      const detach = on(element, 'animationcancel', (evt) => {
        event = evt;
      });

      detach();

      element.dispatchEvent(new Event('fullscreenchange'));

      expect(event).toBeFalsy();
    });
  });
});
