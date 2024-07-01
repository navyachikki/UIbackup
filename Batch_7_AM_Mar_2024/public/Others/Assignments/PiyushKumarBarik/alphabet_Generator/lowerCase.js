var numGenerate = () => {
    var alphaGen = '';
    var size = prompt("Enter size of generator");

    for (let i = 0; i < size; i++) {
        var min = 97;
        var max = 122;
        var round = Math.floor(Math.random() * (max - min) + min);
        var val = String.fromCharCode(round);
        alphaGen = alphaGen + val;
    }
    document.querySelector(".numgenBlock").innerText = alphaGen;
}