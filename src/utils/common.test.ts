import { moneyformat, normalize, validatePathFormat } from './common';

test('normalize', () => {
  expect(normalize()).toBe('');
  expect(normalize('     ')).toBe('');
  expect(normalize('Abc ')).toBe('abc');
  expect(normalize(' Abc')).toBe('abc');
  expect(normalize(' Abc ')).toBe('abc');
  expect(normalize(' A bc ')).toBe('a bc');
  expect(normalize(' 한글로 검색 ')).toBe('한글로 검색');
});

test('moneyformat', () => {
  expect(moneyformat(0)).toBe('0');
  expect(moneyformat(10)).toBe('10');
  expect(moneyformat(100)).toBe('100');
  expect(moneyformat(1000)).toBe('1,000');
  expect(moneyformat(10000)).toBe('10,000');
  expect(moneyformat(100000)).toBe('100,000');
  expect(moneyformat(1000000)).toBe('1,000,000');
});

test('validatePathFormat', () => {
  const msg = 'Invalid path format';
  expect(() => validatePathFormat('')).toThrowError(msg);
  expect(() => validatePathFormat('home')).toThrowError(msg);
  expect(() => validatePathFormat('order')).toThrowError(msg);
  expect(() => validatePathFormat('/order')).not.toThrowError(msg);
  expect(() => validatePathFormat('/')).not.toThrowError(msg);
});
