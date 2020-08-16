import { removeNode, querySelector } from '../src';

describe('removeNode', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p></p>';
  });

  test('removeNode function removes node', () => {
    querySelector('p').map(removeNode);

    expect(document.body.innerHTML).toBe('');
  });
});
