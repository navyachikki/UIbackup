var obj = {
    getDetails () {
        obj.Name = document.querySelector('#empName').value;
        if (obj.Name==''){
            document.querySelector(".nameError").style.display="initial";
            return;
        }
        obj.Age =document.querySelector('#empAge').value;
        obj.Salary=document.querySelector('#empSalary').value;
        obj.Salary=parseInt(obj.Salary);
        obj.Gender = document.querySelector("input[name=empGender]:checked").value;
        obj.Dept=document.querySelector("#empDept").value;
        obj.totalSalary();
    },
    totalSalary(){
        obj.pf=(obj.Salary*14)/100;
        obj.hra=(obj.Salary*24)/100;
        obj.total=0;
        obj.total=obj.Salary+obj.hra+obj.pf;
        obj.displaySalary();
    },
    displaySalary(){
        document.querySelector(".child").style.display ="block";
        document.querySelector('#dname').innerHTML=obj.Name;
        document.querySelector('#dage').innerHTML=obj.Age;
        document.querySelector("#dDept").innerHTML = obj.Dept;
        document.querySelector("#dtotal").innerHTML = obj.total;
    }
    
}