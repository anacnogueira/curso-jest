import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  test('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Ana',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Ana&profession=developer');
  });

  test('should create a valid querty string even when an array passed as value', () => {
    const obj = {
      name: 'Ana',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Ana&abilities=JS,TDD');
  });

  test('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Ana',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  test('should convert a query string to object', () => {
    const qs = 'name=Ana&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Ana',
      profession: 'developer',
    });
  });

  test('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Ana';

    expect(parse(qs)).toEqual({
      name: 'Ana',
    });
  });
});
