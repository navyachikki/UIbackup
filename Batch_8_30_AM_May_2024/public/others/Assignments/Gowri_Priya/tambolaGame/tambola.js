
for (let i = 1; i <= 90; i++) {
    // let row = "";
    // for (let j = 1; j <= 10; j++) {
    //     row += (i * 10 + j) + " ";
    // }
    // console.log(row.trim());

    var d=document.createElement('div');
    d.setAttribute('class','circle');
    d.innerHTML = i;

    document.querySelector('.container').append(d);
}








