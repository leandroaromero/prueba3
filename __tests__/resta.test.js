const resta = require('../src/functions/resta');

test('Resta de 1 y 2 = -1', () => {
  expect(resta(1, 2)).toBe(-1);
});