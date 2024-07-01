var register = () =>{
    var name = document.querySelector("#name").value;
    var age = document.querySelector("#age").value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    var country = document.querySelector("#country").value;
    var mail = document.querySelector("#email").value;
    var table =  document.getElementById("userTable").getElementsByTagName("tbody")[0];
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = gender;
    cell4.innerHTML = country;
    cell5.innerHTML = mail;
    cell6.innerHTML = '<button onclick="editUser(this)">Edit</button> <button onclick="deleteUser(this)">Delete</button>';

}

function editUser(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    var name = cells[0].innerHTML;
    var age = cells[1].innerHTML;
    var gender = cells[2].innerHTML;
    var country = cells[3].innerHTML;
    var email = cells[4].innerHTML;
    
    document.getElementById("name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("country").value = country;
    document.getElementById("email").value = email;
    document.getElementById("gender").value = gender;

    row.remove();
}

function deleteUser(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}