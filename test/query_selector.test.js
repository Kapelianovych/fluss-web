import { querySelector } from '../build';

describe('querySelector', () => {
  test('querySelector function gets element from the page', () => {
    document.body.innerHTML = `
      <div class="el"><p></p></div>
    `;

    expect(querySelector('.el').isJust()).toBe(true);
    expect(querySelector('p', querySelector('.el')).isJust()).toBe(true);
    querySelector('.el').map((el) =>
      expect(el.outerHTML).toMatch('<div class="el"><p></p></div>')
    );
  });

  test('querySelector function do not fail if element is not exists', () => {
    document.body.innerHTML = `
      <div class="el"></div>
    `;

    expect(querySelector('#el').isNothing()).toBe(true);
  });
});
