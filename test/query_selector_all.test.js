import { jest } from '@jest/globals';
import { querySelectorAll } from '../build';

describe('querySelectorAll', () => {
  beforeAll(() => {
    document.body.innerHTML = `
    <div class="el"></div>
    <div class="el"></div>
  `;
  });

  test('querySelectorAll function gets elements from the page', () => {
    const querySelectorAllMoked = jest.fn(querySelectorAll);

    expect(Array.isArray(querySelectorAllMoked('.el'))).toBe(true);
    expect(querySelectorAllMoked).toBeCalled();

    querySelectorAllMoked('.el').forEach((el) =>
      expect(el.outerHTML).toMatch('<div class="el"></div>')
    );
  });

  test('querySelectorAll function do not fail if elements is not exists and returns empty array', () => {
    expect(Array.isArray(querySelectorAll('#el'))).toBe(true);
    expect(querySelectorAll('#el').length).toBe(0);
  });
});
