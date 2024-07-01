var userDetails = [];

var displayDetails = () => {
    var data = {
        name: document.querySelector("#name").value,
        age: document.querySelector("#age").value,
        gender: document.querySelector("input[name=gender]:checked").value,
        classNum: document.querySelector("#class").value
    };

    for (var i = 0; i < userDetails.length; i++) {
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
    document.querySelector("#name").value = '';
    document.querySelector("#age").value = '';
    document.querySelector("input[name=gender]").checked = true;
    document.querySelector("#class").value = '';
}

var addDataToTable = (data) => {
    var trtag = document.createElement("tr");

    var keys = ["name", "age", "gender", "classNum"];
    for (var i = 0; i < keys.length; i++) {
        var td = document.createElement("td");
        td.innerText = data[keys[i]];
        trtag.append(td);
    }

    var td = document.createElement("td");
    var deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "Delete");
    deleteBtn.setAttribute("class", "rbtn");
    deleteBtn.addEventListener("click", (event) => {
        var tdtag = event.target.parentNode;
        var trTag = tdtag.parentNode;
        trTag.remove();
    });
    td.append(deleteBtn);

    var editBtn = document.createElement("input");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    editBtn.addEventListener("click", (event) => {
        var tdtag = event.target.parentNode;
        var trTag = tdtag.parentNode;
        
        trTag.innerHTML = "";  // Clear existing row content

        for (var i = 0; i < keys.length; i++) {
            var td = document.createElement("td");
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("value", data[keys[i]]);
            input.setAttribute("class", "inputEle");

            td.append(input);
            trTag.append(td);
        }

        // Add save button
        var saveTd = document.createElement("td");
        var saveBtn = document.createElement("input");
        saveBtn.setAttribute("type", "button");
        saveBtn.setAttribute("value", "Save");
        saveBtn.setAttribute("class", "SBtn");
        saveBtn.addEventListener("click", function () {
            var inputs = trTag.querySelectorAll("input");
            for (var i = 0; i < inputs.length; i++) {
                data[keys[i]] = inputs[i].value;
            }
            console.log("Saved data:", data);

            // Update the row with the new values
            trTag.innerHTML = "";
            for (var i = 0; i < keys.length; i++) {
                var td = document.createElement("td");
                td.innerText = data[keys[i]];
                trTag.append(td);
            }

            var td = document.createElement("td");
            td.append(deleteBtn);
            td.append(editBtn);
            trTag.append(td);
        });

        saveTd.append(saveBtn);
        trTag.append(saveTd);
    });
    td.append(editBtn);
    trtag.append(td);

    document.querySelector("tbody").append(trtag);

    console.log(userDetails);
}
