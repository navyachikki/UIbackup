function isPalindrome(number) {
    const str = number.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function printPalindromes(array) {
    array.forEach(number => {
        if (isPalindrome(number)) {
            console.log(number);
        }
    });
}

const numbers = [22, 334, 344, 544, 121, 432, 764];
printPalindromes(numbers);
