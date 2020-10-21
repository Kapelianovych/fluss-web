import { createElement } from '../src';

describe('createElement', () => {
  test('createElement creates element and wraps it in Wrapper instance', () => {
    expect(createElement('a').extract).toBeDefined();
    expect(createElement('a').extract()).toBeInstanceOf(HTMLAnchorElement);
  });
});
