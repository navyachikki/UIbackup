var readEmployeeData = () => {
    var employeeData = {};
    employeeData.name = document.querySelector("#ename").value;
    employeeData.age = document.querySelector("#eage").value;
    employeeData.gender = document.querySelector("input[name=gender]:checked").value;
    employeeData.department = document.querySelector("#edepartment").value;
    employeeData.basicSalary = document.querySelector("#salary").value;
    employeeData.basicSalary = parseInt(employeeData.basicSalary);
    var result = getTotals(employeeData);
    displayEmployeeDetails(employeeData);
}

    
function getTotals(employee) {
    employee["pf"] = (12 / 100) * employee.basicSalary;
    employee["hra"] = (24 / 100) * employee.basicSalary;
    employee["totalSalary"] = employee.basicSalary + employee.pf + employee.hra;
    employee["tax"] = 0;
    if (employee.gender === "male" || employee.gender === "Male") {
      employee.tax = maleTax(employee);
    } else {
      employee.tax = femaleTax(employee);
    }
    employee["taxPercent"] = (employee.tax / 100) * employee.totalSalary;
    return employee;
  }
  function maleTax(employee) {
    if (employee.totalSalary >= 200000) {
      employee.tax = 15;
    } else if (employee.totalSalary >= 150000) {
      employee.tax = 10;
    } else if (employee.totalSalary >= 100000) {
      employee.tax = 5;
    } else {
      employee.tax = 0;
    }
    return employee.tax;
  }
  function femaleTax(employee) {
    if (employee.totalSalary >= 200000) {
      employee.tax = 10;
    } else if (employee.totalSalary >= 150000) {
      employee.tax = 5;
    } else {
      employee.tax = 0;
    }
    return employee.tax;
  }
  

var displayEmployeeDetails = (obj) => {
    document.querySelector(".displayBlock").style.display = 'block';

    document.querySelector("#d_name").innerText = obj.name;
    document.querySelector("#d_age").innerText = obj.age;
    document.querySelector("#d_gender").innerText = obj.gender;
    document.querySelector("#d_dept").innerText = obj.department;
    document.querySelector("#d_pf").innerText = obj.pf;
    document.querySelector("#d_hra").innerText = obj.hra;
    document.querySelector("#d_tax").innerText = obj.taxPercent;
}
