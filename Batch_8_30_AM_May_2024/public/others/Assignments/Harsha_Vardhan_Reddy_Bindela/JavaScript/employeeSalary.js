var employeeName = prompt("Enter Your Name: ");
var employeeDepartment = prompt("Enter Your Department: ");
var employeeGender = prompt("Enter Your Gender");
var basicSalary = parseInt(prompt("Enter Your Basic Salary :"));
var pf = basicSalary * 12 / 100;
var hra = basicSalary * 24 / 100;
var totalSalary = basicSalary + pf + hra;


console.log("Employee Name: "+employeeName);
console.log("Employee Department: "+employeeDepartment);
console.log("Employee Gender: "+employeeGender);
console.log("Basic Salary: "+ basicSalary);
console.log("PF: "+ pf);
console.log("HRA: "+hra);
console.log("Total Salary: "+ totalSalary);