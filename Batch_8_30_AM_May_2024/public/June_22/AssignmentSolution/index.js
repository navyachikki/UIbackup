var userDetails = [];

var saveDetails = () => {
    var data = {
        name: document.querySelector("#sname").value,
        age: document.querySelector("#sage").value ,
        gender:  document.querySelector("input[name=gender]:checked").value
    };

    for (var i = 0 ; i < userDetails.length; i++) {
        if (JSON.stringify(userDetails[i]) == JSON.stringify(data)) {
            alert("duplicate data not allowed");
            return;
        }
    }


    userDetails.push(data);
    resetDatatoDefault();

    //add row to the table
    addDataToTable(data);
}

var resetDatatoDefault = () => {
    document.querySelector("#sname").value = '',
    document.querySelector("#sage").value = '' ,
    document.querySelector("input[name=gender]").checked = true;
}

var addDataToTable = (data) => {
    var trtag = document.createElement("tr");
    /*
    var td1 = document.createElement("td");
    td1.innerText = data.name;
    trtag.append(td1);

    var td2 = document.createElement("td");
    td2.innerText = data.age;
    trtag.append(td2);

    var td3 = document.createElement("td");
    td3.innerText = data.gender;
    trtag.append(td3);

    console.log(trtag);

    document.querySelector("tbody").append(trtag); */ 

    var keys = ["name", 'age', "gender"];
    for (var i = 0 ; i < keys.length; i++) {
        var td = document.createElement("td");
        td.innerText = data[keys[i]];
        trtag.append(td);
    }
    td = document.createElement("td");
    var deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.setAttribute("class", "rbtn");
    deleteBtn.addEventListener("click", (event) => {
        var tdtag = event.target.parentNode;
        var trTag = tdtag.parentNode;
        trTag.remove();
    })
    td.append(deleteBtn);

    var editBtn = document.createElement("input");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    td.append(editBtn);
    trtag.append(td);

    document.querySelector("tbody").append(trtag);

    console.log(userDetails);
}