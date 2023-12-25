const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
    let missingDigits = "";

    for (let i = 0; i < 10; i++) {
        const digit = i.toString();

        if (!numStr.includes(digit)) {
            if (missingDigits != "") {
                missingDigits += ", ";
            }
            missingDigits += digit;
        }
    }

    if (missingDigits) {
        return `${numStr} Missing Digit = ${missingDigits}`;
    } else {
        return `${numStr} has no missing digits`;
    }
}

console.log(missingDigits(numStr1));
console.log(missingDigits(numStr2));
console.log(missingDigits(numStr3));
