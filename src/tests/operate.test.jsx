import operate from '../logic/operate';

describe('All Operations', () => {
  test('Addition', () => {
    expect(operate('2', '2', '+')).toBe('4');
  });
  test('Subtraction', () => {
    expect(operate('2', '2', '-')).toBe('0');
  });
  test('Multiplication', () => {
    expect(operate('2', '2', 'x')).toBe('4');
  });
  test('Division', () => {
    expect(operate('2', '2', '÷')).toBe('1');
  });
  test('Modulo', () => {
    expect(operate('8', '2', '%')).toBe('0');
  });
  test('Check For Unknown Operator', () => {
    expect(() => operate('8', '2', '&')).toThrow('Unknown operation \'&\'');
  });
  test('Check For Division By Zero', () => {
    expect(operate('8', '0', '÷')).toBe('Can\'t divide by 0.');
  });
  test('Check For Division By Zero', () => {
    expect(operate('8', '0', '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
