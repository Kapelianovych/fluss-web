import { replace, querySelector, createElement } from '../src';

describe('replace', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p></p>';
  });

  test('replace function replace element with texts', () => {
    querySelector('p').map((p) => createElement('a').map((a) => replace(p, a)));

    expect(document.body.innerHTML).toMatch('<a></a>');
  });

  test('replace function replace element with texts', () => {
    querySelector('a').map((a) => replace(a, 'hello'));

    expect(document.body.innerHTML).toMatch('hello');
  });
});
