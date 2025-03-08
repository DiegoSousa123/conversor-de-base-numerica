export function convertToDecimal(number: string, base : number): string{
    const parsedNumber = number.split('').reverse().map((digit, index) => parseInt(digit) * Math.pow(base, index)).reduce((acc, value) => acc + value, 0);
    return parsedNumber.toString() || '0';
}
export function convertToBinary(number: string, base: number): string{
    const parsedNumber = parseInt(number);
    let quotient = parsedNumber;
    let remainder = [];
    while(quotient > 0){
        remainder.push(quotient % base);
        quotient = Math.floor(quotient / base);
    }
    return remainder.reverse().join('') || '0';
}