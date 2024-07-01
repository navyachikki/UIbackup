var readEmpData = () => {
  var empData = {};
  empData.ID = document.querySelector("#eId").value;
  empData.Name = document.querySelector("#eName").value;
  empData.designation = document.querySelector("#desig").value;
  empData.basicSal = parseInt(document.querySelector("#bSal").value);
  empData.gender = document.querySelector("input[name=gender]:checked").value;

  getPfAndHra(empData);

  //     displayEmpDetails(empData);
}

var getPfAndHra = (empData) => {
  empData.pf = (empData.basicSal * 10) / 100;
  empData.hra = (empData.basicSal * 15) / 100;
  empData.totalsal = empData.basicSal + empData.pf + empData.hra;

  displayEmpDetails(empData);
}

var displayEmpDetails = (empData) => {
  document.querySelector(".displayBlock").style.display = "block";
  document.querySelector("#d_ID").innerText = empData.ID;
  document.querySelector("#d_name").innerText = empData.Name;

  document.querySelector("#d_pf").innerText = empData.pf;
  document.querySelector("#d_hra").innerText = empData.hra;

  document.querySelector("#d_salary").innerText = empData.totalsal;
}
