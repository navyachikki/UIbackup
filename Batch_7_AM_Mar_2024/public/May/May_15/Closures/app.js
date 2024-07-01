var count = 0;

var doOperation = (type) => {
    count++;
    var result;
    var data = {
        a1: document.querySelector("#fval").value,
        a2: document.querySelector("#sval").value
    }
    console.log(data);
    switch(type) {
        case 'add':
            result = mathUtilLib.doAdditionValues(data.a1, data.a2);
            break;
        case 'div':
            result = mathUtilLib.doDivision(data.a1, data.a2);
            break;
        case 'mul':
            result = doMultiplication(data.a1, data.a2);
            break;
        case 'sub':
            result = mathUtilLib.doSubstraction(data.a1, data.a2);
            break;
    }

    var msg = "The " + type + ' is : ' + result
    document.querySelector("#resultBlock").innerText = msg;

    document.querySelector("#sCount").innerText = count;
}
