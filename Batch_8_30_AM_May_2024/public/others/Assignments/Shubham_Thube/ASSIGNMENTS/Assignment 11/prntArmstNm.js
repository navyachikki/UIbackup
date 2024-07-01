function isArmstrongNumber(num) {

    const numStr = num.toString();
    const numDigits = numStr.length;
    
    let sum = 0;
    for (let char of numStr) {
        sum += Math.pow(parseInt(char), numDigits);
    }

    return sum === num;
}

function findArmstrongNumbers(range) {
    let armstrongNumbers = [];
    for (let i = 1; i <= range; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

    const armstrongNumbers = findArmstrongNumbers(1000);
console.log("Armstrong numbers between 1 and 1000 are:", armstrongNumbers);
