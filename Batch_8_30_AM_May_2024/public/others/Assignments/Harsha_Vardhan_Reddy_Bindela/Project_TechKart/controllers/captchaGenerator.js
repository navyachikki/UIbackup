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

// function printmsg() {
//     const usr_input = document
//         .getElementById("submit").value;

//     // Check whether the input is equal
//     // to generated captcha or not
//     if (usr_input == captcha.innerHTML) {
//         let s = document.getElementById("key")
//             .innerHTML = "Matched";
//         generate();
//     }
//     else {
//         let s = document.getElementById("key")
//             .innerHTML = "not Matched";
//         generate();
//     }
// }