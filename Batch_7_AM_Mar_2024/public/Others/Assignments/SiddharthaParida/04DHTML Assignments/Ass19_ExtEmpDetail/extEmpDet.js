var obj = {
    getDetails () {
        obj.Name = document.querySelector("#empName").value;
        if(obj.Name == ''){
            document.querySelector(".nameErr").style.display = "initial";
            return;
        }
        obj.Age = document.querySelector("#empAge").value;
        obj.Salary = document.querySelector("#empSalary").value;
        obj.Salary = parseInt(obj.Salary);
        obj.Gender = document.querySelector("input[name=gender]:checked").value;
        obj.Department = document.querySelector("#empDpt").value;
        obj.totalSalary();
    },
    totalSalary(){
        obj.PF = (obj.Salary * 14) / 100;
        obj.HRA = (obj.Salary * 24) / 100;
        obj.total = 0;
        obj.total = obj.Salary + obj.HRA + obj.PF;
        obj.displaySalary();
    },
    displaySalary() {
        document.querySelector(".display").style.display = "block";
        document.querySelector("#dname").innerHTML = obj.Name;
        document.querySelector("#dage").innerHTML = obj.Age;
        document.querySelector("#dempdpt").innerHTML = obj.Department;
        document.querySelector("#dtotal").innerHTML = obj.total;
    }
}