
 var mathUtilLib = (() => {
    var count = 10;
    var doAddition = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        result = a1 + a2;
        console.log(count);
        return result;
    }

    

    var doMultiplication = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        result = a1 * a2;
        console.log(count);
        return result;
    }

    var doDivision = (a1, a2) => {
        count++;
        a1 = parseInt(a1);
        a2 = parseInt(a2);
        result = a1 / a2;
        return result;
    }

    var displayInfo = () => {
        console.log("This is from my display info lib");
    }
    var uname = 'Krish';
    return {
        username: uname,
        doAdditionValues(a1, a2) {
            return doAddition(a1, a2);
        },
        doSubstraction(a1, a2) {
            count++;
            a1 = parseInt(a1);
            a2 = parseInt(a2);
            result = a1 - a2;
            return result;
        },
        doDivision(a1, a2) {
            count++;
            a1 = parseInt(a1);
            a2 = parseInt(a2);
            result = a1 / a2;
            return result;
        }
    };

})();
console.log(mathUtilLib.username);

