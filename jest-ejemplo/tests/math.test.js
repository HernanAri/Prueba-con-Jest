const { sumar, restar } = require('../src/math');

test('la suma de 2 + 3 debe ser 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('la resta de 10 - 4 debe ser 6', () => {
  expect(restar(10, 4)).toBe(6);
});
