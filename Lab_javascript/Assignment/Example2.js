const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
  const allDigits = new Set("0123456789");
  const inputSet = new Set(numStr);
  const missingDigits = [...allDigits].filter(digit => !inputSet.has(digit));
  
  if (missingDigits.length > 0){
    const missingDigitsStr = missingDigits.sort().join(', ');
    return `${numStr} Missing Digit = ${missingDigitsStr}`;
    }
  else {
    return `${numStr} has no missing digits`;
  }
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));
