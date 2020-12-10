import { hasAttribute, query } from '../build';

describe('hasAttribute', () => {
  test('hasAttribute returns true if attribute exists in element', () => {
    document.body.innerHTML = '<p class="p"></p>';

    expect(
      query('p')
        .map((el) => hasAttribute(el, 'class'))
        .extract()
    ).toBe(true);
  });

  test('hasAttribute accepts Maybe object.', () => {
    expect(hasAttribute(query('p'), 'class')).toBe(true);
  });

  test('hasAttribute returns false if attribute does not exists in element', () => {
    expect(
      query('p')
        .map((el) => hasAttribute(el, 'id'))
        .extract()
    ).toBe(false);
  });
});
