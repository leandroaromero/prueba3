const cociente = require('../src/functions/cociente');

test('Cociente de 2 y 1 = 2', () => {
  expect(cociente(2, 1)).toBe(2);
});