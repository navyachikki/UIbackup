var getRandomValue = () => {
    return Math.floor(Math.random() * 10);
}

var getRandomChar = (type) => {
    if (type == 'L') {
        var min = 97;
        var max = 122;
    } else {
        var min = 65;
        var max = 90;
    }
    var randomAscii = (Math.random() * (max- min)) + min;
    randomAscii = Math.floor(randomAscii);
    return String.fromCharCode(randomAscii);
}