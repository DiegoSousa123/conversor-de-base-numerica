export function convertToDecimal(number: string, base : number): string{
    const parsedNumber = number.split('').reverse().map((digit, index) => parseInt(digit) * Math.pow(base, index)).reduce((acc, value) => acc + value, 0);
    return parsedNumber.toString() || '0';
}
export function convertFromDecimal(number: string, base: number): string{
    const parsedNumber = parseInt(number);
    let quotient = parsedNumber;
    let remainder = [];
    while(quotient > 0){
        let roundedRemainder = quotient % base;
        remainder.push(roundedRemainder);
        quotient = Math.floor(quotient / base);
    }
    return remainder.reverse().join('') || '0';
}

export function convertFromHexadecimal(number: string): string{
    const regex = /\b0x/ //detects the 0x prefix
    let validatedInput = number.replace(regex, ''); //removes the 0x prefix
    const hexLetters = [['A', 10], ['B', 11], ['C', 12], ['D', 13], ['E', 14], ['F', 15]];
    let auxNumber = validatedInput.toUpperCase().split('').reverse();
    for(let [letter, value] of hexLetters){
        let aux = new RegExp(`${letter}`, 'g');
        auxNumber = auxNumber.map((digit) => digit.replace(aux, value.toString()));   
    }
    let parsed = auxNumber.map((digit, index) => parseInt(digit) * Math.pow(16, index)).reduce((acc, value) => acc + value, 0);
    return parsed.toString() || '0';
}

export function convertToHexadecimal(number: string): string{
    const hexLetters = [['A', 10], ['B', 11], ['C', 12], ['D', 13], ['E', 14], ['F', 15]];
    let quotient = parseInt(number);
    let remainder = [];
    while(quotient > 0){
        let rounded = Math.round(quotient % 16);
        remainder.push(rounded);
        quotient = Math.floor(quotient / 16);
    }
    let result = remainder.reverse().map((digit) => digit.toString());
    for(let [letter, value] of hexLetters){
        let aux = new RegExp(`${value}`, 'g');
        result = result.map((digit) => digit.replace(aux, String(letter)));
    }
    const prefix = "0x";
    return prefix.concat(result.join('') || '0');
}