import { setAttribute, querySelector, getAttribute } from '../build';

describe('setAttribute', () => {
  test('setAttribute sets attribute of element', () => {
    document.body.innerHTML = '<div></div>';

    querySelector('div').map((el) => setAttribute(el, 'class', 'el'));
    expect(
      querySelector('div')
        .map((el) => el.getAttribute('class'))
        .extract()
    ).toBe('el');
  });

  test('setAttribute accepts Maybe object.', () => {
    setAttribute(querySelector('div'), 'id', 'outer');

    expect(getAttribute(querySelector('div'), 'id').isJust()).toBe(true);
    expect(getAttribute(querySelector('div'), 'id').extract()).toBe('outer');
  });
});
