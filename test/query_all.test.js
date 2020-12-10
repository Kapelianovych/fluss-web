import { jest } from '@jest/globals';
import { queryAll } from '../build';

describe('queryAll', () => {
  beforeAll(() => {
    document.body.innerHTML = `
    <div class="el"></div>
    <div class="el"></div>
  `;
  });

  test('queryAll function gets elements from the page', () => {
    const querySelectorAllMoked = jest.fn(queryAll);

    expect(Array.isArray(querySelectorAllMoked('.el'))).toBe(true);
    expect(querySelectorAllMoked).toBeCalled();

    querySelectorAllMoked('.el').forEach((el) =>
      expect(el.outerHTML).toMatch('<div class="el"></div>')
    );
  });

  test('queryAll function do not fail if elements is not exists and returns empty array', () => {
    expect(Array.isArray(queryAll('#el'))).toBe(true);
    expect(queryAll('#el').length).toBe(0);
  });
});
