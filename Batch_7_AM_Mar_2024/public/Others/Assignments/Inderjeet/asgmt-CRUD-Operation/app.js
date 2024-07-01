var register = () => {
    console.log("I am Running");
    var name = document.querySelector("#txtName").value;
    var age = document.querySelector("#txtAge").value;
    var gender = document.querySelector('input[name="Gender"]:checked').value;
    var country = document.querySelector("#txtCountry").value;
    var email = document.querySelector("#txtMail").value;
    
    // var td = document.createElement("td");
    // td.innerHTML = name;
    // for(var i =0; i <= 5; i++){
    //     var td = document.createElement("td");
    //     td.innerHTML = name;
        
    //     document.querySelector('tbody').appendChild(td);
    // }
    var tr = document.createElement("tr")

    var td1 = document.createElement("td");
    td1.innerHTML = name;
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = age;
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    td3.innerHTML = gender;
    tr.appendChild(td3);

    var td4 = document.createElement("td");
    td4.innerHTML = country;
    tr.appendChild(td4);

    var td5 = document.createElement("td");
    td5.innerHTML = email;
    tr.appendChild(td5);

    var td6 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.innerHTML = "Delete";
    btn1.setAttribute("id","bnt1");
    btn1.setAttribute("onclick","deleteRow(event)");
    btn1.style.cursor = "pointer";
    td6.appendChild(btn1);
    var btn2 = document.createElement("button");
    btn2.innerHTML = "Edit";
    btn2.setAttribute("id","bnt2");
    btn2.style.cursor = "pointer";
    btn2.setAttribute("onclick","EditRow(event)");
    td6.appendChild(btn2);
    tr.appendChild(td6);
    document.querySelector("tbody").appendChild(tr);
 
}

var deleteRow = (event) => {
   document.querySelector("td").parentElement.remove();
}

var EditRow = (event) => {
    document.querySelector("#txtName").value = '';
    document.querySelector("#txtAge").value = '';
    document.querySelector('input[name="Gender"]:checked').value = '';
    document.querySelector("#txtCountry").value = '';
    document.querySelector("#txtMail").value = '';
}