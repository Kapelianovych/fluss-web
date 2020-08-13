import { isWrapper } from '@fluss/core';
import { createTextNode } from '../src';

describe('createTextNode', () => { 
  test('createTextNode creates test node wrapped by Wrapper', () => {
    expect(isWrapper(createTextNode('Hello'))).toBe(true);
  })
});