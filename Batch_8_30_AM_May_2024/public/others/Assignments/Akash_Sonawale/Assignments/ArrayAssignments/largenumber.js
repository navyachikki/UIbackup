var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var largest = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log(largest);
