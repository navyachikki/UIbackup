
function reverseNumber(num) {
    let numStr = num.toString();

    let reversedStr = numStr.split('').reverse().join('');
  
    let reversedNum = parseInt(reversedStr, 10);
    return reversedNum;
  }

  let reversedNumbers = [];
  
  for (let i = 1000; i >= 201; i--) {
  
    let reversed = reverseNumber(i);

    reversedNumbers.push(reversed);
  }
  
  console.log(reversedNumbers);
  