const { isValidPassword } = require('./validator');


test('valed pasword', () => {
    expect(isValidPassword('Darsh123456')).toEqual({ valid: true, reason: '' });
});




test('fail be to short', () => {
  expect(isValidPassword('Darsh12')).toEqual({
    valid: false,
    reason: 'Too short (min 8 characters)'
  });
});



test('A password with only lowercase + numbers should fail', () => {
  expect(isValidPassword('darsh1234')).toEqual({
    valid: false,
    reason: 'Must contain an uppercase letter'
  });
});




test('Letters only, even with uppercase, should fail', () => {
  expect(isValidPassword('MostafaMagdy')).toEqual({
    valid: false,
    reason: 'Must contain a number'
  });
});



test('Pass a number, null, or undefined instead of a string', () => {
  expect(isValidPassword(201027177120)).toEqual({
    valid: false,
    reason: 'Password must be a string'
  });
});

test('What is the shortest possible valid password? Test exactly 8 chars.', () => {
  expect(isValidPassword('Mostafa1')).toEqual({
    valid: true,
    reason: ''
  });
});