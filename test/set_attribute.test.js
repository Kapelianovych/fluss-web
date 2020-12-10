import { setAttribute, query, getAttribute } from '../build';

describe('setAttribute', () => {
  test('setAttribute sets attribute of element', () => {
    document.body.innerHTML = '<div></div>';

    query('div').map((el) => setAttribute(el, 'class', 'el'));
    expect(
      query('div')
        .map((el) => el.getAttribute('class'))
        .extract()
    ).toBe('el');
  });

  test('setAttribute accepts Maybe object.', () => {
    setAttribute(query('div'), 'id', 'outer');

    expect(getAttribute(query('div'), 'id').isJust()).toBe(true);
    expect(getAttribute(query('div'), 'id').extract()).toBe('outer');
  });
});
