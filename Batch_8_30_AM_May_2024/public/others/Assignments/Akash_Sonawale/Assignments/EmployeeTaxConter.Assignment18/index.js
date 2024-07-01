var readEmployeeDetails = () => {
    let employeeDetails = {};
    employeeDetails.name = document.querySelector("#eName").value;
    employeeDetails.age = document.querySelector("#eAge").value;
    employeeDetails.gender = document.querySelector("input[name=gender]:checked").value;
    employeeDetails.salary = [];

    for (let i = 1; i <= 1; i++) {
        let id = "#s" + i;
        let value = parseInt(document.querySelector(id).value);
        employeeDetails.salary.push(value);
    }

    let result = getTotalAndAvg(employeeDetails);
    employeeDetails.total = result[0] ;
    employeeDetails.avg = result[1];
    employeeDetails.tax = calculateTax(employeeDetails.total);
    employeeDetails.grade = getEmployeeGrade(employeeDetails.avg);
    
    displayEmployeeDetails(employeeDetails);
}

var getTotalAndAvg = (obj) => {
    let total = 0;

    obj.salary.forEach(salary => {
        total += salary;
    });

    let avg = total / obj.salary.length;
    return [total, avg];
}

var calculateTax = (totalSalary) => {
    let tax = 0;

    if (totalSalary >= 200000) {
        tax = totalSalary * 0.15;
    } else if (totalSalary >= 150000) {
        tax = totalSalary * 0.10;
    } else if (totalSalary >= 100000) {
        tax = totalSalary * 0.05;
    }

    return tax;
}

var getEmployeeGrade = (avg) => {
    return (avg >= 200000) ? "You have too much salary" : "you have less salary!!! keep working";
}

var displayEmployeeDetails = (obj) => {
    document.querySelector(".displayBlock").style.display = 'block';
    document.querySelector("#d_name").innerText = obj.name;
    document.querySelector("#d_age").innerText = obj.age;
    document.querySelector("#d_total").innerText = obj.total;
    document.querySelector("#d_avg").innerText = obj.avg;
    document.querySelector("#d_tax").innerText = obj.tax;
    document.querySelector("#d_grade").innerText = obj.grade;
}
