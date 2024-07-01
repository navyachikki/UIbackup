function validatesignUpForm() {
    let username = document.getElementById("username").value;
    if (username === "") {
      alert("Please Enter User Name");
      return false;
    }
    let psw = document.getElementById("password").value;
    if (psw === "") {
      alert("Please Enter Password");
      return false;
    }
    let cnfpassword = document.getElementById("cnfpassword").value;
    if (cnfpassword === "") {
      alert("Please Confirm Password");
      return false;
    }
    if (psw !== cnfpassword) {
      alert("Passwords do not match");
      return false;
    }
    let mobile = document.getElementById("mobile").value;
    if (mobile === "") {
      alert("Please Enter Mobile Number");
      return false;
    }
    let email = document.getElementById("email").value;
    if (email === "") {
      alert("Please Enter Email");
      return false;
    }
    return true;
  }
  