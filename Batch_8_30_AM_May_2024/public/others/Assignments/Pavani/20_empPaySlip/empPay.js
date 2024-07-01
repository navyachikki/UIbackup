var readEmpData = () => {
    var empData ={};
    empData.name = document.querySelector("#empName").value;
    empData.age = document.querySelector("#empAge").value;
    empData.gender = document.querySelector("input[name=gender]:checked").value;
    empData.dept = document.querySelector("#empDept").value;
    empData.basicsal = document.querySelector("#basicsal").value;
    empData.basicsal = parseInt(empData.basicsal);

    var result = calculateTotalsalary(empData.basicsal);
    empData.pf = result[0];
    empData.hra = result[1];
    empData.totalsal = result[2];
    empData.taxpercent = getTaxPercent(empData.gender , empData.totalsal);
    console.log(empData);
    displayEmployeeData(empData);
}

var calculateTotalsalary = (basicsal) => {
    var totalsal = 0;
    pf = (12 * basicsal) / 100;
    hra = (24 * basicsal) / 100;
    totalsal = basicsal + pf + hra;
    return [pf, hra, totalsal];
}

var getTaxPercent = (gender, totalsal) => {
    var taxpercent = 0;
    if (gender == 'male') {
        if (totalsal >= 200000) {
            taxpercent = (totalsal * 15) / 100;
        } else if (totalsal >= 150000) {
            taxpercent = (totalsal * 10) / 100;
        } else if (totalsal >= 100000) {
            taxpercent = (totalsal * 5) / 100;
        }
    } else {
        if (totalsal >= 200000) {
            taxpercent = (totalsal * 10) / 100;
        } else if (totalsal >= 150000) {
            taxpercent = (totalsal * 5) / 100;
        }
    }
    return taxpercent;
}


var displayEmployeeData = (obj) => {

    document.querySelector(".Block").style.display = 'block';

    document.querySelector("#E_name").innerHTML = obj.name;
    document.querySelector("#E_age").innerHTML = obj.age;
    document.querySelector("#E_gender").innerHTML = obj.gender;
    document.querySelector("#E_dept").innerHTML = obj.dept;
    document.querySelector("#E_basicsal").innerHTML = obj.basicsal;
    document.querySelector("#E_pf").innerHTML = obj.pf;
    document.querySelector("#E_hra").innerHTML = obj.hra;
    document.querySelector("#E_totalsal").innerHTML = obj.totalsal;
    document.querySelector("#E_tax").innerHTML = obj.taxpercent;
    
}

