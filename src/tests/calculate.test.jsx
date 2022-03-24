import calculate from '../logic/calculate';

it('when AC is selected, it should be null', () => {
  const calculateObj = { total: 4, next: 2, operation: '+' };
  const acBtn = 'AC';
  const result = calculate(calculateObj, acBtn);
  expect(result).toEqual({ total: null, next: null, operation: null });
});
