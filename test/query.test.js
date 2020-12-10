import { query } from '../build';

describe('query', () => {
  test('query function gets element from the page', () => {
    document.body.innerHTML = `
      <div class="el"><p></p></div>
    `;

    expect(query('.el').isJust()).toBe(true);
    expect(query('p', query('.el')).isJust()).toBe(true);
    query('.el').map((el) =>
      expect(el.outerHTML).toMatch('<div class="el"><p></p></div>')
    );
  });

  test('query function do not fail if element is not exists', () => {
    document.body.innerHTML = `
      <div class="el"></div>
    `;

    expect(query('#el').isNothing()).toBe(true);
  });
});
