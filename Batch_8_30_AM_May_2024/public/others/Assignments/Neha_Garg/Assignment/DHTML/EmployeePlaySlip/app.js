var readEmployeeData = () => {
  var employeeData = {};
  employeeData.name = document.querySelector("#eName").value;
  employeeData.age = document.querySelector("#eAge").value;
  employeeData.gender = document.querySelector( "input[name=gender]:checked").value;
  employeeData.department = document.querySelector("input[name=department]:checked").value;
  employeeData.salary = parseFloat(document.querySelector("#eSalary").value);
  var emp = pfandHraCalculation(employeeData);

  employeeData.pf = emp.pf;
  employeeData.hra = emp.hra;
  employeeData.totalSal = emp.totalSal;
  employeeData.tax=employeeTaxCalculation(employeeData);
  employeePaySlipDisplay(employeeData);
  console.log(employeeData);
}


var pfandHraCalculation = (obj) => {
  obj.pf = (14 * obj.salary) / 100;
  obj.hra = (24 * obj.salary) / 100;

  obj.totalSal = obj.salary + obj.pf + obj.hra;
  return obj;
}

employeeTaxCalculation = (empDetails) => {
  if (empDetails.gender== "Male") {
    if (empDetails.totalSal >= 200000) {
      empDetails.taxPer = (15 * empDetails.totalSal) / 100;
    } else if (empDetails.totalSal >= 100000) {
      empDetails.taxPer = (10 * empDetails.totalSal) / 100;
    } else {
      empDetails.taxPer = (5 * empDetails.totalSal) / 100;
    }
  } else if (empDetails.gender == "Female") {
    if (empDetails.totalSal >= 200000) {
      empDetails.taxPer = (10 * empDetails.totalSal) / 100;
    } else if (empDetails.totalSal >= 150000) {
      empDetails.taxPer = (5 * empDetails.totalSal) / 100;
    } else {
      empDetails.taxPer = 0;
    }
  } else {
    console.log("Wrong gender");
  }
  return empDetails.taxPer;
}
var employeePaySlipDisplay=(employeeData)=>{


        document.querySelector(".displayContainer").style.display='block';
        document.querySelector("#e_name").innerText=employeeData.name;
        document.querySelector("#e_age").innerText=employeeData.age;
        document.querySelector("#e_gender").innerText=employeeData.gender;
        document.querySelector("#e_dept").innerText=employeeData.department;
        document.querySelector("#e_salary").innerText=employeeData.salary+"Rs.";
        document.querySelector("#e_pf").innerText=employeeData.pf+"Rs.";
        document.querySelector("#e_hra").innerText=employeeData.hra+"Rs.";
        document.querySelector("#e_total").innerText=employeeData.totalSal+"Rs.";
        document.querySelector("#e_tax").innerText=employeeData.tax+"Rs.";
    }

