import { hasAttribute, querySelector } from '../src';

describe('hasAttribute', () => {
  test('hasAttribute returns true if attribute exists in element', () => {
    document.body.innerHTML = '<p class="p"></p>';
    
    expect(
      querySelector('p')
        .map((el) => hasAttribute(el, 'class'))
        .extract()
    ).toBe(true);
  });

  test('hasAttribute returns false if attribute does not exists in element', () => {
    expect(
      querySelector('p')
        .map((el) => hasAttribute(el, 'id'))
        .extract()
    ).toBe(false);
  });
});
