import calculate from '../logic/calculate';

describe('Calculate Function Test', () => {
  const calculateObj = { total: 4, next: 2, operation: '+' };
  let result = {};
  it('when AC is selected, it should be null', () => {
    result = calculate(calculateObj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('First non AC Button Pressed', () => {
    result = calculate(result, '1');
    expect(result).toEqual({ next: '1', total: null });
  });

  it('Operation Pressed After First Number', () => {
    result = calculate(result, '+');
    expect(result).toEqual({ total: '1', next: null, operation: '+' });
  });

  it('Number After Operation', () => {
    result = calculate(result, '2');
    expect(result).toEqual({ total: '1', next: '2', operation: '+' });
  });

  it('Number After Number', () => {
    result = calculate(result, '3');
    expect(result).toEqual({ total: '1', next: '23', operation: '+' });
  });

  it('Second Operation', () => {
    result = calculate(result, '-');
    expect(result).toEqual({ total: '24', next: null, operation: '-' });
  });

  it('Third Number After Second Operation', () => {
    result = calculate(result, '4');
    expect(result).toEqual({ total: '24', next: '4', operation: '-' });
  });

  it('Equal Button Pressed', () => {
    result = calculate(result, '=');
    expect(result).toEqual({ total: '20', next: null, operation: null });
  });
});
