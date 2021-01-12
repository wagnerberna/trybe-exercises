// sum.test.js
const sum = require('./10-02-sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});