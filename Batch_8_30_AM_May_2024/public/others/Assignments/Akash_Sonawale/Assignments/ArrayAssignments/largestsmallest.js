var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var largest = array[0];
var smallest= array[0];

for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
    if(array[i] < smallest ){
        smallest=array[i];
    }
}

console.log(largest);
console.log(smallest);
