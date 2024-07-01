

var getRandomChar = () => {
    var type=Math.round((Math.random() * 2) + 1)
    if (type == '1') {
        var min = 97;
        var max = 122;
    } else if(type == '2'){
        var min = 65;
        var max = 90;
    }
    else if(type == '3'){
        var min = 48;
        var max = 57;
    }

    var randomAscii = (Math.random() * (max- min)) + min;
    randomAscii = Math.floor(randomAscii);
    return String.fromCharCode(randomAscii);
}