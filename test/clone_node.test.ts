import { cloneNode, querySelector } from '../src';

describe('cloneNode', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p><a></a></p>';
  });

  test('cloneNode clones node with default deep value', () => {
    expect(
      querySelector('p')
        .map(cloneNode)
        .map((clonedP) => {
          expect((clonedP as Element).innerHTML).toMatch('');
        })
    );
  });

  test('cloneNode clones node with descendants', () => {
    expect(
      querySelector('p')
        .map((p) => cloneNode(p, true))
        .map((clonedP) => {
          expect((clonedP as Element).innerHTML).toMatch('<a></a>');
        })
    );
  });
});
