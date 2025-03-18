import { convertToDecimal, convertFromDecimal, convertFromHexadecimal, convertToHexadecimal } from './convertion';

//test convertion from binary to decimal
test('convert binary to decimal', () => {
  expect(convertToDecimal('1010', 2)).toBe('10');
});

//test convertion from decimal to binary
test('convert decimal to binary', () => {
  expect(convertFromDecimal('10', 2)).toBe('1010');
});

//test convertion from hexadecimal to decimal
test('convert hexadecimal to decimal', () => {
  expect(convertFromHexadecimal('0xF')).toBe('15');
});

//test convertion from decimal to hexadecimal
test('convert decimal to hexadecimal', () => {
  expect(convertToHexadecimal('15')).toBe('0xF');
});

//test from octal to decimal
test('convert octal to decimal', () => {
    expect(convertToDecimal('150', 8)).toBe('104');
});

//test convertion from decimal to octal
test('convert decimal to octal', () => {
    expect(convertFromDecimal('104', 8)).toBe('150');
});