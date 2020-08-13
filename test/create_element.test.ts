import { isWrapper } from '@fluss/core';
import { createElement } from '../src';

describe('createElement', () => {
  test('createElement creates element and wraps it in Wrapper instance', () => {
    expect(isWrapper(createElement('a'))).toBe(true);
    expect(createElement('a').extract()).toBeInstanceOf(HTMLAnchorElement);
  });
});
