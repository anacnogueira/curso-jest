import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should sum 2 and 2 and the result must 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('should sum 2 and 2 even if one them is a string and the result must be 4', () => {
  expect(sum('2', '2')).toBe(4);
});

test('should throw an error if what is provided to the method cannot be sumed', () => {
  expect(() => {
    sum('', '2');
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
