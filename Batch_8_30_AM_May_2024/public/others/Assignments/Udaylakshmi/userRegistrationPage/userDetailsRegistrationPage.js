var countryList = [
    {
        name: "India",
        value: "India",
    },
    {
        name: "Switzerland",
        value: "Switzerland",
    },
];
document.querySelector("input[name=gender]").checked = "Male";
document.querySelector("#country").innerHTML =
    '<option value="">Select Country</option>';
for (var i = 0; i < countryList.length; i++) {
    document.querySelector("#country").value = "";
    var optionTag = document.createElement("option");
    optionTag.setAttribute("value", countryList[i]?.name);
    optionTag.innerHTML = countryList[i]?.value;
    document.querySelector("#country").append(optionTag);
}
var i = 0;
function addUserData() {
    var trTag = document.createElement("tr");
    trTag.setAttribute("id", `index${i}`);
    var tdNmTag = document.createElement("td");
    tdNmTag.innerHTML = document.querySelector("#uname").value;
    tdNmTag.setAttribute("id", `name${i}`);
    trTag.append(tdNmTag);
    var tdAgeTag = document.createElement("td");
    tdAgeTag.innerHTML = document.querySelector("#uage").value;
    tdAgeTag.setAttribute("id", `age${i}`);
    trTag.append(tdAgeTag);
    var tdGenTag = document.createElement("td");
    tdGenTag.innerHTML = document.querySelector(
        "input[name=gender]:checked"
    ).value;
    tdGenTag.setAttribute("id", `gender${i}`);
    trTag.append(tdGenTag);
    var tdLocTag = document.createElement("td");
    tdLocTag.innerHTML = document.querySelector("#country").value;
    tdLocTag.setAttribute("id", `country${i}`);
    trTag.append(tdLocTag);
    var tdActionTag = document.createElement("td");
    var divTag = document.createElement("div");
    var editTag = document.createElement("input");
    var deleteTag = document.createElement("input");
    editTag.setAttribute("type", "button");
    editTag.setAttribute("value", "Edit");
    editTag.style.cursor = "pointer";
    editTag.setAttribute("onclick", `edit(${i})`);
    deleteTag.setAttribute("type", "button");
    deleteTag.setAttribute("value", "Delete");
    deleteTag.style.cursor = "pointer";
    deleteTag.setAttribute("onclick", `delRow(${i})`);
    divTag.append(editTag);
    divTag.append(deleteTag);
    tdActionTag.append(divTag);
    trTag.append(tdActionTag);
    document.querySelector("#tabBody").append(trTag);
    i = i + 1;
    document.querySelector("#uname").value = "";
    document.querySelector("#uage").value = "";
    document.querySelector("input[name=gender]").checked = "Male";
    document.querySelector("#country").value = "";
}
var editDetail = 0;
function edit(i) {
    editDetail = i;
    document.querySelector("#register").style.display = "none";
    document.querySelector("#save").style.display = "block";
    document.querySelector("#uname").value = document.querySelector(
        `#name${i}`
    ).innerHTML;
    document.querySelector("#uage").value = document.querySelector(
        `#age${i}`
    ).innerHTML;
    document.querySelector("input[name=gender]").checked = document.querySelector(
        `#gender${i}`
    ).innerHTML;
    document.querySelector("#country").value = document.querySelector(
        `#country${i}`
    ).innerHTML;
}

function saveData() {
    document.querySelector("#register").style.display = "block";
    document.querySelector("#save").style.display = "none";
    document.querySelector(`#name${editDetail}`).innerHTML =
        document.querySelector("#uname").value;
    document.querySelector(`#age${editDetail}`).innerHTML =
        document.querySelector("#uage").value;
    document.querySelector(`#gender${editDetail}`).innerHTML =
        document.querySelector("input[name=gender]").value;
    document.querySelector(`#country${editDetail}`).innerHTML =
        document.querySelector("#country").value;
    document.querySelector("#uname").value = "";
    document.querySelector("#uage").value = "";
    document.querySelector("input[name=gender]").checked = "Male";
    document.querySelector("#country").value = "";
}

function delRow(i) {
    document.querySelector(`#index${i}`).remove();
}
