export function convertToDecimal(number: string): string{
    const parsedNumber = number.split('').reverse().map((digit, index) => parseInt(digit) * Math.pow(2, index)).reduce((acc, value) => acc + value, 0);
    return parsedNumber.toString() || '0';
}
export function convertToBinary(number: string): string{
    const parsedNumber = parseInt(number);
    let quotient = parsedNumber;
    let remainder = [];
    while(quotient > 0){
        remainder.push(quotient % 2);
        quotient = Math.floor(quotient / 2);
    }
    return remainder.reverse().join('') || '0';
}