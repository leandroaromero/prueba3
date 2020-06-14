const producto = require('../src/functions/producto');

test('Resta de 1 y 2 = 2', () => {
  expect(producto(1, 2)).toBe(-1);
});