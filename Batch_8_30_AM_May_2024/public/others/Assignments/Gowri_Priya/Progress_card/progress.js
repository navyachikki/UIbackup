var displayStudentDetails = (obj) => {

    document.querySelector(".displayBlock").style.display = 'block';

    document.querySelector("#dname").innerText = obj.name;
    document.querySelector("#dage").innerText = obj.age;
    document.querySelector("#gender").innerText = obj.gender;
    document.querySelector("#Bsal").innerText = obj.BasicSal;
    document.querySelector("#pf").innerText = obj.pf;
    document.querySelector("#hra").innerText = obj.hra;
    document.querySelector("#tax").innerText = obj.tax;
}
var readStudentData = () =>{
    var employeeData = {};
    employeeData.name = document.querySelector("#name").value;
    employeeData.age = document.querySelector("#age").value;
    employeeData.location = document.querySelector("#loc").value;
    employeeData.gender = document.querySelector("input[name=gender]:checked").value;
    employeeData.BasicSal = document.querySelector("#sal").value;
    employeeData.BasicSal = parseInt(employeeData.BasicSal);

    var result = getTotals(employeeData) ; 
    employeeData.totalSal = result;
    displayStudentDetails(employeeData);
    
}
function getTotals(employee){
    employee["pf"] = (12/100) * employee.BasicSal;
    employee["hra"] = (24/100) * employee.BasicSal;
    employee["totalSal"] = employee.BasicSal + employee.pf + employee.hra;
    employee["tax"] = 0;

    if(employee.BasicSal >= 20000){
        if(employee.gender.toLowercase=="female"){
            employee.tax=(10/100)*employee.Basicsal;
                    console.log(employee.tax)
        }
        else{
            employee.tax = (15/100) * employee.BasicSal;
            console.log(employee.tax);
        }
    }
    else{
        employee.tax ="Zero"
        console.log(employee.tax)
    }

    return employee["totalSal"];


}




