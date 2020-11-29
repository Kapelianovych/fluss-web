import { toggleAttribute, querySelector, getAttribute } from '../build';

describe('toggleAttribute', () => {
  beforeAll(() => {
    document.body.innerHTML = '<input value="Input" />';
  });

  test('toggleAttribute toggles readonly attribute', () => {
    querySelector('input').map((input) => {
      toggleAttribute(input, 'readonly');
      expect(getAttribute(input, 'readonly').isJust()).toBe(true);

      toggleAttribute(input, 'readonly');
      expect(getAttribute(input, 'readonly').isJust()).toBe(false);
    });
  });

  test('toggleAttribute with "force" causes to adding or removing attribute', () => {
    querySelector('input').map((input) => {
      toggleAttribute(input, 'readonly', false);
      expect(getAttribute(input, 'readonly').isJust()).toBe(false);

      toggleAttribute(input, 'readonly', true);
      expect(getAttribute(input, 'readonly').isJust()).toBe(true);
    });
  });
});