var locationList=[
    {
        name: "Hyderabad",
        value: "Hyderabad"
    },
    {
        name: "Bangalore",
        value: "Bangalore"
    },
    {
        name: "Pune",
        value: "Pune"
    },
    {
        name: "Chennai",
        value: "Chennai"
    },
];

document.querySelector("input[name=gender:checked]").value = "male";
for(var i=0; i < locationList.length; i++){
    document.querySelector("#location").value="";
}

var i=0;
var editIndex=0;

function userData(){
    var trTag = document.createElement("tr");
    trTag.setAttribute("id", "user"+i);

    var tdName = document.createElement("td");
    tdName.innerHTML = document.querySelector("#name").value;
    tdName.setAttribute("id", "name"+i);
    trTag.append(tdName);

    var tdAge = document.createElement("td");
    tdAge.innerHTML = document.querySelector("#age").value;
    tdAge.setAttribute("id", "age"+i);
    trTag.append(tdAge);

    var tdGender = document.createElement("td");
    tdGender.innerHTML = document.querySelector("input[name=gender]:checked").labels[0].innerText;
    tdGender.setAttribute("id", "gender"+i);
    trTag.append(tdGender);

    var tdLocation = document.createElement("td");
    tdLocation.innerHTML = document.querySelector("#location").value;
    tdLocation.setAttribute("id", "location"+i);
    trTag.append(tdLocation);

    var tdAction = document.createElement("td");
    var divTag = document.createElement("div");

    var editTag = document.createElement("input");
    editTag.setAttribute("id", "edit-"+i);
    editTag.setAttribute("type", "button");
    editTag.setAttribute("value", "Edit");
    // editTag.setAttribute("onclick", "edit(i");
    editTag.onclick = (event) => {
        var index = event.target.id.split('-')[1];
        editIndex = index;
        document.querySelector("#name").value = document.querySelector("#name"+index).innerText;
        document.querySelector("#age").value = document.querySelector("#age"+index).innerText;
        
        let genderText = document.querySelector("#gender"+index).innerText;        
        if(genderText == 'Male') {
            document.querySelector("input[name=gender][value=male]").checked = "on";
        }
        else {
            document.querySelector("input[name=gender][value=female]").checked = "on";
        }
        
        document.querySelector("#location").value = document.querySelector("#location"+index).innerText;
        
        document.querySelector("#register").style.display = "none";
        document.querySelector("#save").style.display = "block";
    };

    var deletetag = document.createElement("input");
    deletetag.setAttribute("id", "delete-"+i); 
    deletetag.setAttribute("type", "button");
    deletetag.setAttribute("value", "Delete");
    deletetag.setAttribute("onclick", "delRow("+i+")");

    divTag.append(editTag);

    divTag.append(deletetag);
    tdAction.append(divTag);
    // thAction.innerHTML = document.querySelector(#userAction).value;
     tdAction.setAttribute("id", "action"+i);
     trTag.append(tdAction);

    document.querySelector("#tbody").append(trTag);
    i++;

    document.querySelector("#name").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("input[name=gender][value=male]").checked="on";
    document.querySelector("#location").value="";
}

function saveData() {
    document.querySelector("#register").style.display = "block";
    document.querySelector("#save").style.display = "none";
    document.querySelector("#name"+editIndex).innerHTML = document.querySelector("#name").value;
    document.querySelector("#age"+editIndex).innerHTML = document.querySelector("#age").value;
    document.querySelector("#gender"+editIndex).innerHTML = document.querySelector("input[name=gender]:checked").labels[0].innerText;
    document.querySelector("#location"+editIndex).innerHTML = document.querySelector("#location").value;
    document.querySelector("#name").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("input[name=gender][value=male]").checked="on";
    document.querySelector("#location").value = "";

}
function delRow(i){
    document.querySelector('#user'+i).remove();
}
// userData();