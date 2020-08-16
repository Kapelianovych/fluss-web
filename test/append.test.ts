import { append, querySelector, createElement } from '../src';

describe('append', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p></p>';
  });

  test('append function insert node into parent element', () => {
    querySelector('p').map((el) => {
      createElement('a').map((a) => append(el, a));

      expect(el.outerHTML).toMatch('<p><a></a></p>');
    });
  });

  test('append function insert string into parent element', () => {
    querySelector('p a').map((el) => {
      append(el, 'Link');

      expect(el.innerHTML).toMatch('Link');
    });
  });
});
