import { appendNodes, querySelector, createElement } from '../src';

describe('appendNodes', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p></p>';
  });

  test('appendNodes function insert node into parent element', () => {
    querySelector('p').map((el) => {
      createElement('a').map((a) => appendNodes(el, a));

      expect(el.outerHTML).toMatch('<p><a></a></p>');
    });
  });

  test('appendNodes function insert string into parent element', () => {
    querySelector('p a').map((el) => {
      appendNodes(el, 'Link');

      expect(el.innerHTML).toMatch('Link');
    });
  });
});
