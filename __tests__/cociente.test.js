const cociente = require('../src/functions/cociente');

test('Cociente de 2 y 1 = 2', () => {
  expect(cociente(2, 1)).toBe(2);
});

test('Cociente de 2 y 0 = indefinido', () => {
  expect(cociente(2, 0)).toBe("indefinido");
});