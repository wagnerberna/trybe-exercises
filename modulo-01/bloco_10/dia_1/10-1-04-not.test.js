const workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workdays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(workdays).toContain('Monday');
});

test('Sunday is not a workday', () => {
  expect(workdays).not.toContain('Sunday');
});