var empDetailList = [
  {
    empNm: "Raj",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/happy-young-african-businessman_171337-736.jpg",
    gender: "Male",
    department: "IT",
    BasicSal: 10000,
  },
  {
    empNm: "Usha",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718323200&semt=sph",
    gender: "Female",
    department: "IT",
    BasicSal: 3456789,
  },
  {
    empNm: "Raj",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/happy-young-african-businessman_171337-736.jpg",
    gender: "Male",
    department: "IT",
    BasicSal: 10000,
  },
  {
    empNm: "Usha",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718323200&semt=sph",
    gender: "Female",
    department: "IT",
    BasicSal: 3456789,
  },
  {
    empNm: "Raj",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/happy-young-african-businessman_171337-736.jpg",
    gender: "Male",
    department: "IT",
    BasicSal: 10000,
  },
  {
    empNm: "Usha",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718323200&semt=sph",
    gender: "Female",
    department: "IT",
    BasicSal: 3456789,
  },
  {
    empNm: "Raj",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/happy-young-african-businessman_171337-736.jpg",
    gender: "Male",
    department: "IT",
    BasicSal: 10000,
  },
  {
    empNm: "Usha",
    empAge: 20,
    empImg:
      "https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718323200&semt=sph",
    gender: "Female",
    department: "IT",
    BasicSal: 3456789,
  },
];

var showEmpDetails = (employees) => {
  for (var i = 0; i <= employees.length; i++) {
    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    mainLi.setAttribute("class", "employee");
    var liEmpNm = document.createElement("li");
    liEmpNm.innerHTML = "Name: " + employees[i].empNm;
    ulTag.append(liEmpNm);
    var liAge = document.createElement("li");
    liAge.innerHTML = "Age: " + employees[i].empAge;
    ulTag.append(liAge);
    var liGender = document.createElement("li");
    liGender.innerHTML = "Gender: " + employees[i].gender;
    ulTag.append(liGender);
    var liBasicSal = document.createElement("li");
    liBasicSal.innerHTML = "BasicSalary: " + employees[i].BasicSal;
    ulTag.append(liBasicSal);
    var totals = getTotals(employees[i]);
    var liPf = document.createElement("li");
    liPf.innerHTML = "PF: " + employees[i].pf;
    ulTag.append(liPf);
    var liHra = document.createElement("li");
    liHra.innerHTML = "HRA: " + employees[i].hra;
    ulTag.append(liHra);
    var liTax = document.createElement("li");
    liTax.innerHTML = "TaxPercentage: " + employees[i].taxPercent;
    ulTag.append(liTax);
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", employees[i].empImg);
    ulTag.append(imgTag);
    mainLi.append(ulTag);
    document.querySelector("#container").append(mainLi);
    console.log(mainLi, totals, employees[i]);
  }
};

showEmpDetails(empDetailList);

function getTotals(employee) {
  employee["pf"] = (12 / 100) * employee.BasicSal;
  employee["hra"] = (24 / 100) * employee.BasicSal;
  employee["totalSalary"] = employee.BasicSal + employee.pf + employee.hra;
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
