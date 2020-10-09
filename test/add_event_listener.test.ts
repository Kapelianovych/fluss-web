import { just } from '@fluss/core';
import { addEventListener, querySelector } from '../src';

describe('addEventListener', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="first"></div>
      <div class="second"></div>
    `;
  });

  test('addEventListener adds listener to element', () => {
    let event: Event | null = null;

    querySelector('.first').map((element) => {
      addEventListener(element, 'fullscreenchange', (evt) => {
        event = evt;
      });

      element.dispatchEvent(new Event('fullscreenchange'));

      expect(event).toBeTruthy();
    });
  });

  test('addEventListener adds listener to maybe element', () => {
    let event: Event | null = null;

    querySelector('.first', just(document)).map((element) => {
      addEventListener(element, 'fullscreenchange', (evt) => {
        event = evt;
      });

      element.dispatchEvent(new Event('fullscreenchange'));

      expect(event).toBeTruthy();
    });
  });

  test('addEventListener returns function that remove previously added listener', () => {
    let event: Event | null = null;

    querySelector<HTMLDivElement>('.second').map((element) => {
      addEventListener(element, 'animationcancel', (evt) => {
        event = evt;
      }).map((fn) => fn());

      element.dispatchEvent(new Event('fullscreenchange'));

      expect(event).toBeFalsy();
    });
  });
});
