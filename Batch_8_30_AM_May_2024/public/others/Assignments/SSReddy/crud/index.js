var userDetails = [];
var serialno = 0;
var updatesno = 0;
var updatetr;
var genedit;


var saveDetails = () => {
    if(updatesno==0){ 

        var data = {
            sno : serialno+1,
            name: document.querySelector("#sname").value,
            age: document.querySelector("#sage").value ,
            gender:  document.querySelector("input[name=gender]:checked").value
        };
        

        for (var i = 0 ; i < userDetails.length; i++) {
            if ((userDetails[i].name == data.name) & (userDetails[i].age == data.age ) & (userDetails[i].gender == data.gender )) {
                alert("duplicate data not allowed");
                return;
            }
        }


        userDetails.push(data);
        serialno=data.sno;
       

        //add row to the table
        addDataToTable(data);
    }
    else{
        var data1 = {
            name: document.querySelector("#sname").value,
            age: document.querySelector("#sage").value ,
            gender:  document.querySelector("input[name=gender]:checked").value
        };
        console.log(updatetr);
       updatetr.children[1].innerText=data1.name;
        updatetr.children[2].innerText= data1.age;
        updatetr.children[3].innerText= data1.gender;
        for (var i = 0 ; i < userDetails.length; i++) {
            if ((userDetails[i].sno == updatesno) ) {
                userDetails[i].name = data1.name;
                userDetails[i].age = data1.age;
                userDetails[i].gender = data1.gender;
                break; 
               
            }
        }
        console.log("update : "+userDetails);
        updatesno = 0;
        updatetr="";
        console.log(userDetails);
    }
    resetDatatoDefault();
}

var resetDatatoDefault = () => {
    document.querySelector("#sname").value = '',
    document.querySelector("#sage").value = '' ,
    document.querySelector("input[name=gender]").checked = true;
}

var addDataToTable = (data) => {
    var trtag = document.createElement("tr");
    trtag.setAttribute("id","tr_"+data.sno)
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

    var keys = ["sno","name", 'age', "gender"];
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
        var trtagid=trTag.getAttribute("id");
        var trsno= parseInt(document.getElementById(trtagid).firstChild.innerText);
        for (var i = 0 ; i < userDetails.length; i++) {
            if ((userDetails[i].sno == trsno) ) {
                userDetails.splice(i, 1);
                break; 
               
            }
        }
        
        console.log("tr_id"+trtagid+"tr_sno :"+trsno);
        console.log(userDetails);
        trTag.remove();
    })
    td.append(deleteBtn);

    var editBtn = document.createElement("input");
    editBtn.setAttribute("type", "button");
    editBtn.setAttribute("value", "Edit");
    editBtn.addEventListener("click", (event1) => {
        var tdtag = event1.target.parentNode;
        var trTag = tdtag.parentNode;
        var trtagid=trTag.getAttribute("id");
       updatetr = document.getElementById(trtagid);
        var trsno= parseInt(document.getElementById(trtagid).firstChild.innerText);
        updatesno=trsno;
        document.querySelector("#sname").value=updatetr.children[1].innerHTML;
        document.querySelector("#sage").value =updatetr.children[2].innerHTML;
        genedit=updatetr.children[3].innerHTML;

       

        Array.from(  document.querySelectorAll('[name="gender"]')   ).forEach((element,index) =>
            {
                if (genedit == element.value) {
                    element.checked = true;
                } else {
                    element.checked = false;
                }
            });

        
        console.log("tr_id  : "+trtagid+".  sno  : "+trsno+"=>"+ updatetr+"<  >"+genedit);
        
        
    })
    td.append(editBtn);
    trtag.append(td);

    document.querySelector("tbody").append(trtag);

    console.log(userDetails);
}