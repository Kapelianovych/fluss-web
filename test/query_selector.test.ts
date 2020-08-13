import { querySelector } from '../src';

describe('querySelector', () => {
  test('querySelector function gets element from the page', () => {
    document.body.innerHTML = `
      <div class="el"></div>
    `;

    expect(querySelector('.el').isJust()).toBe(true);
    expect(querySelector('.el').extract().outerHTML).toMatch(
      '<div class="el"></div>'
    );
  });

  test('querySelector function do not fail if element is not exists', () => {
    document.body.innerHTML = `
      <div class="el"></div>
    `;

    expect(querySelector('#el').isNothing()).toBe(true);
  });
});
