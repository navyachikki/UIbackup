var readEmployeeDetails = () => {
  var employeeDetails = {}
  employeeDetails.name = document.querySelector("#ename").value
  employeeDetails.age = document.querySelector("#eage").value
  employeeDetails.basicSalary = parseInt(
    document.querySelector("#esalary").value
  )
  employeeDetails.gender = document.querySelector(
    "input[name=gender]:checked"
  ).value
  var result = getTotal(employeeDetails)
  employeeDetails.pf = result[0]
  employeeDetails.hra = result[1]
  employeeDetails.totalSalary = result[2]
  var taxis = calculatetax(employeeDetails)
  console.log(employeeDetails)
  employeeDetails.taxPercent = (taxis / 100) * employeeDetails.basicSalary
  displayStudentDetails(employeeDetails)
}

var getTotal = (object) => {
  var pf = 0.12 * object.basicSalary
  var hra = 0.24 * object.basicSalary
  var total = pf + hra + object.basicSalary
  return [pf, hra, total]
}
var calculatetax = (object) => {
  if (object.gender == "male") {
    if (object.totalSalary >= 200000) {
      tax = 15
    } else if (object.totalSalary >= 150000) {
      tax = 10
    } else if (object.totalSalary >= 100000) {
      tax = 5
    } else {
      tax = 0
    }
  } else {
    if (object.totalSalary >= 200000) {
      tax = 10
    } else if (object.totalSalary >= 150000) {
      tax = 5
    } else {
      tax = 0
    }
  }
  return tax
}

var displayStudentDetails = (obj) => {
  document.querySelector(".displayBlock").style.display = "block"

  document.querySelector("#e_name").innerText = obj.name
  document.querySelector("#e_age").innerText = obj.age
  document.querySelector("#e_gender").innerText = obj.gender
  document.querySelector("#e_basicSal").innerText = obj.basicSalary
  document.querySelector("#e_pf").innerText = obj.pf
  document.querySelector("#e_hra").innerText = obj.hra
  document.querySelector("#e_tax").innerText = obj.taxPercent
  document.querySelector("#e_totalSalary").innerText = obj.totalSalary
}
