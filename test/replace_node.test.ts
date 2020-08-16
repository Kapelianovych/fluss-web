import { replaceNode, querySelector, createElement } from '../src';

describe('replaceNode', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p></p>';
  });

  test('replaceNode function replaceNode element with texts', () => {
    querySelector('p').map((p) => createElement('a').map((a) => replaceNode(p, a)));

    expect(document.body.innerHTML).toMatch('<a></a>');
  });

  test('replaceNode function replaceNode element with texts', () => {
    querySelector('a').map((a) => replaceNode(a, 'hello'));

    expect(document.body.innerHTML).toMatch('hello');
  });
});
