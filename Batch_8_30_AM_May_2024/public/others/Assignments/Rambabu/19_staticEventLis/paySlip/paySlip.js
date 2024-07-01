var employeeDetails = () => {
  var empDetails = {};
  empDetails.name = capitalizeFirstLetter(
    document.querySelector("#empName").value
  );
  empDetails.gender = document.querySelector(
    "input[name=gender]:checked"
  ).value;
  empDetails.designation = capitalizeFirstLetter(
    document.querySelector("#empDesignation").value
  );
  empDetails.department = capitalizeFirstLetter(
    document.querySelector("#empDepartment").value
  );
  empDetails.payroll = document.querySelector("#empPayroll").value;
  empDetails.workingDays = document.querySelector("#empWorkingDays").value;
  empDetails.basicSalary = parseInt(
    document.querySelector("#empBasicSalary").value
  );
  // We can return the Array Type 1

  // var earnings = getTotalEarnings(empDetails);
  // empDetails.incentivePay = incentivePay[0];
  // empDetails.hra = hra[1];
  // empDetails.meals = meals[2];
  // empDetails.totalEarnings = earnings[3];

  // We can return the Array Type 2

  // var [incentivePay, hra, meals, totalEarnings] = getTotalEarnings(empDetails);
  // empDetails.incentivePay = incentivePay;
  // empDetails.hra = hra;
  // empDetails.meals = meals;
  // empDetails.totalEarnings = totalEarnings;

  // We can return the Array Type 3
  [
    empDetails.incentivePay,
    empDetails.hra,
    empDetails.meals,
    empDetails.totalEarnings,
  ] = getTotalEarnings(empDetails);

  // We can return the Array

  [
    empDetails.pf,
    empDetails.tax,
    empDetails.totalDeductions,
    empDetails.lossOfPay,
  ] = getTotalDeduction(empDetails);

  // We can return the Object also.

  //   var deductions = getTotalDeduction(empDetails);
  //   empDetails.totalDeductions = deductions.totalDeductions;
  //   empDetails.tax = deductions.tax;
  //   empDetails.pf = deductions.pf;

  empDetails.netPay = empDetails.totalEarnings - empDetails.totalDeductions;
  displayPayslip(empDetails);
};
var getTotalEarnings = (obj) => {
  console.log(obj.basicSalary);
  var incentivePay = obj.basicSalary * 0.1;
  var hra = obj.basicSalary * 0.08;
  var meals = obj.basicSalary * 0.05;
  var totalEarnings = obj.basicSalary + incentivePay + hra + meals;
  return [incentivePay, hra, meals, totalEarnings];
};
var getTotalDeduction = (obj) => {
  console.log(obj.totalEarnings, obj.incentivePay, obj.hra, obj.meals);
  var pf = obj.basicSalary * 0.12;
  var lossOfPay = parseInt(
    obj.basicSalary - (obj.basicSalary * obj.workingDays) / 30
  );
  var taxPercent = 0;
  if (obj.gender === "Male") {
    if (obj.totalEarnings >= 200000) {
      taxPercent = 0.15;
    } else if (obj.totalEarnings >= 150000) {
      taxPercent = 0.1;
    } else if (obj.totalEarnings >= 100000) {
      taxPercent = 0.05;
    }
  } else {
    if (obj.totalEarnings >= 200000) {
      taxPercent = 0.1;
    } else if (obj.totalEarnings >= 150000) {
      taxPercent = 0.5;
    }
  }
  var tax = obj.totalEarnings * taxPercent;
  var totalDeductions = pf + tax + lossOfPay;

  // We can return the Array
  return [pf, tax, totalDeductions, lossOfPay];

  // We can return the Object also
  //   return {
  //     totalDeductions: totalDeductions,
  //     tax: tax,
  //     pf: pf,
  //   };
};
var displayPayslip = (obj) => {
  document.querySelector(".paySlip").style.display = "block";

  document.querySelector("#d_name").innerText = obj.name;
  document.querySelector("#d_gender").innerText = obj.gender;
  document.querySelector("#d_designation").innerText = obj.designation;
  document.querySelector("#d_department").innerText = obj.department;
  document.querySelector("#d_date").innerText = obj.payroll;
  document.querySelector("#d_workingDays").innerText = obj.workingDays;
  document.querySelector("#d_basicSalary").innerText = obj.basicSalary;

  document.querySelector("#d_incentivePay").innerText = obj.incentivePay;
  document.querySelector("#d_hra").innerText = obj.hra;
  document.querySelector("#d_meals").innerText = obj.meals;
  document.querySelector("#d_totalEarnings").innerText = obj.totalEarnings;
  document.querySelector("#d_pf").innerText = obj.pf;
  document.querySelector("#d_lossOfPay").innerText = obj.lossOfPay;

  document.querySelector("#d_tax").innerText = obj.tax;
  document.querySelector("#d_totalDeductions").innerText = obj.totalDeductions;
  document.querySelector("#d_netPay").innerText = obj.netPay;
};
var capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
