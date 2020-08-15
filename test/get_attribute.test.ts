import { getAttribute, querySelector } from '../src';

describe('getAttribute', () => {
  test('getAttribute function return Maybe with defined result', () => {
    document.body.innerHTML = '<p class="p"></p>';

    expect(
      querySelector<HTMLParagraphElement>('p')
        .chain((el) => getAttribute(el, 'class'))
        .extract()
    ).toBe('p');
  });

  test('getAttribute function return Maybe without defined result', () => {
    document.body.innerHTML = '<p class="p"></p>';

    expect(
      querySelector('p')
        .chain((el) => getAttribute(el, 'id'))
        .isNothing()
    ).toBe(true);
  });
});
