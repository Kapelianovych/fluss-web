import { remove, querySelector } from '../src';

describe('remove', () => {
  beforeAll(() => {
    document.body.innerHTML = '<p></p>';
  });

  test('remove function removes node', () => {
    querySelector('p').map(remove);

    expect(document.body.innerHTML).toBe('');
  });
});
