import { prependNodes, querySelector, createElement } from '../src';

describe('prependNodes', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p><span></span></p>';
  });

  test('prependNodes function insert node into parent element', () => {
    querySelector('p').map((el) => {
      createElement('a').map((a) => prependNodes(el, a));

      expect(el.outerHTML).toMatch('<p><a></a><span></span></p>');
    });
  });

  test('prependNodes function insert string into parent element', () => {
    querySelector('p a').map((el) => {
      prependNodes(el, 'Link');

      expect(el.innerHTML).toMatch('Link');
    });
  });
});
