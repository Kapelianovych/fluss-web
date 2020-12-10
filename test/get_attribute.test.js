import { getAttribute, query } from '../build';

describe('getAttribute', () => {
  test('getAttribute function return Maybe with defined result', () => {
    document.body.innerHTML = '<p class="p"></p>';

    expect(
      query('p')
        .chain((el) => getAttribute(el, 'class'))
        .extract()
    ).toBe('p');
  });

  test('getAttribute accepts Maybe object.', () => {
    expect(getAttribute(query('p'), 'class').extract()).toBe('p');
  });

  test('getAttribute function return Maybe without defined result', () => {
    document.body.innerHTML = '<p class="p"></p>';

    expect(
      query('p')
        .chain((el) => getAttribute(el, 'id'))
        .isNothing()
    ).toBe(true);
  });
});
