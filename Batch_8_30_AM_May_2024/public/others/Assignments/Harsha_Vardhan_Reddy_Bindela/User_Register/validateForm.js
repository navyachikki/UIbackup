function validateRegisterForm() {
  let username = document.getElementById("username").value;
  if (username === "") {
    alert("Please Enter User Name");
    return false;
  }
  let age = document.getElementById("age").value;
  if (age === "") {
    alert("Please Enter Age");
    return false;
  }
  if (
    registerForm.gender[0].checked == false &&
    registerForm.gender[1].checked == false
  ) {
    alert("Please choose your Gender: Male or Female");
    return false;
  }
  let country = document.getElementById("countryDropdown").value;
  if (country === "") {
    alert("Please Select Your Country");
    return false;
  }
  let state = document.getElementById("stateDropdown").value;
  if (state === "") {
    alert("Please Select Your state");
    return false;
  }
  let district = document.getElementById("districtDropdown").value;
  if (district === "") {
    alert("Please Select Your district");
    return false;
  }
  return true;
}
