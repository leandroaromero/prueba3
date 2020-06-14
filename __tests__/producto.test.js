const producto = require('../src/functions/producto');

test('Producto de 1 y 2 = 2', () => {
  expect(producto(1, 2)).toBe(2);
});