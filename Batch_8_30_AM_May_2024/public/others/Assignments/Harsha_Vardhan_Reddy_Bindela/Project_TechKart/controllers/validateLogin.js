function validateLoginForm() {
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
    return true;
  }
  