import { setAttribute, querySelector } from '../src';

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
});
