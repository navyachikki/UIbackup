var getSum = () => {
    var a1 = document.querySelector("#fval").value;
    a1 = parseInt(a1);
    
    var a2 = document.querySelector("#sval").value;
    a2 = parseInt(a2);
    var result = a1 + a2;
    document.querySelector("#rblock").innerHTML = result;
}

var validateData = (event) => {
    if ((event.keyCode >= 47 && event.keyCode <= 58)) {
        return true; // dont allow to type
    } else {
        return false;
    }

    /*if (user endterd value is a number) {
        return true; // allowing 
    } else { // not a numer - string, symboxl.
        retun false; // not allowing }
    } */
}