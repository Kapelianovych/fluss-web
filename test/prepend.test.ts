import { prepend, querySelector, createElement } from '../src';

describe('append', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p><span></span></p>';
  });

  test('append function insert node into parent element', () => {
    querySelector('p').map((el) => {
      createElement('a').map((a) => prepend(el, a));

      expect(el.outerHTML).toMatch('<p><a></a><span></span></p>');
    });
  });

  test('append function insert string into parent element', () => {
    querySelector('p a').map((el) => {
      prepend(el, 'Link');

      expect(el.innerHTML).toMatch('Link');
    });
  });
});
