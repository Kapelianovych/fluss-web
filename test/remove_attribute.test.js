import { hasAttribute, querySelector, removeAttribute } from '../build';

describe('removeAttribute', () => {
  test('removeAttribute removes attribute', () => {
    document.body.innerHTML = '<p class="p"></p>';

    expect(
      querySelector('p')
        .map((el) => {
          removeAttribute(el, 'class');
          return el;
        })
        .map((el) => hasAttribute(el, 'class'))
        .extract()
    ).toBe(false);
  });

  test('removeAttribute accepts Maybe object.', () => {
    expect(() => removeAttribute(querySelector('p'), 'class')).not.toThrow();
  });

  test('removeAttribute does nothing if attribute does not exists.', () => {
    expect(
      querySelector('p')
        .map((el) => {
          removeAttribute(el, 'id');
          return el;
        })
        .map((el) => hasAttribute(el, 'id'))
        .extract()
    ).toBe(false);
  });
});
