
function register(){
    var name=document.querySelector("#name").value;
    var age=document.querySelector("#age").value;
    var gender=document.querySelector("input[name='gender']:checked").value;
    var email=document.querySelector("#email").value;
    var country=document.querySelector("#country").value;
    console.log(name,age,gender,email,country);

    var outputTable=document.querySelector("#outputTable").getElementsByTagName("tbody")[0];
    var row=outputTable.insertRow();
    
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=gender;
    cell4.innerHTML=country;
    cell5.innerHTML=email;
    cell6.innerHTML='<button onclick="editDetail(this)">Edit</button><button onclick="deleteDetail(this)">Delete</button>'
}
function editDetail(button){
    var row=button.parentNode.parentNode;
    var cell=row.getElementsByTagName("td");
    var name=cell[0].innerHTML;
    var age=cell[1].innerHTML;
    var gender=cell[2].innerHTML;
    var country=cell[3].innerHTML;
    var email=cell[4].innerHTML;

    document.getElementById("name").value=name;
    row.remove();
    

}
function deleteDetail(button){
    var row=button.parentNode.parentNode;
    row.remove();
}