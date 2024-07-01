function reverseArray(array) {
    const reversedArray = array.slice().reverse(); 
    reversedArray.forEach(number => {
        console.log(number);
    });
}

const numbers = [22, 334, 344, 544, 121, 432, 764];
reverseArray(numbers);
