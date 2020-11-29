import { closest, querySelector } from '../build';

describe('closest', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="parent">
        <p class="child">Child</p>
      </div>
    `;
  });

  test('closest function gets parent element', () => {
    expect(
      querySelector('.child')
        .chain((child) => closest('.parent', child))
        .isJust()
    ).toBe(true);
    expect(
      querySelector('.child')
        .chain((child) => closest('.parent', child))
        .map((el) => el.innerHTML)
        .extract()
    ).toMatch('<p class="child">Child</p>');
  });

  test('closest function does not fail if parent element is not extsts', () => {
    expect(
      querySelector('.child')
        .chain((child) => closest('.other-parent', child))
        .isNothing()
    ).toBe(true);
  });
});
