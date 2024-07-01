let arr = [10, 5, 8, 20, 15];


let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log("The second largest value is:", secondLargest);
