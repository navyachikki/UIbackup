var employeeDetails = () => {
  var empDetails = {};
  empDetails.name = capitalizeFirstLetter(
    document.querySelector("#empName").value
  );
  empDetails.age = document.querySelector("#empAge").value;
  empDetails.gender = document.querySelector(
    "input[name=gender]:checked"
  ).value;
  empDetails.location = document.querySelector("#empLocation").value;
  clearForm();
  displayUserDetails(empDetails);
};

var displayUserDetails = (obj) => {
  document.querySelector("#d_actions").style.display = "block";

  document.querySelector("#d_name").innerText = obj.name;
  document.querySelector("#d_age").innerText = obj.age;
  document.querySelector("#d_gender").innerText = obj.gender;
  document.querySelector("#d_location").innerText = obj.location;
};
var capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
var clearForm = () => {
  document.querySelector("#empName").value = "";
  document.querySelector("#empAge").value = "";
  document
    .querySelectorAll("input[name=gender]")
    .forEach((el) => (el.checked = false));
  document.querySelector("#empLocation").value = "Country";
};
//
