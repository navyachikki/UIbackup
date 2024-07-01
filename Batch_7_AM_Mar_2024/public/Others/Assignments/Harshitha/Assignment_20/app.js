var obj = {
    empDetails() {
        obj.Name = document.querySelector('#empName').value;
        if (obj.Name == '') {
            document.querySelector('.nameError').style.display = "block";
            return;
        }
        obj.Age = document.querySelector('#empAge').value;
        obj.Salary = document.querySelector("#empSalary").value;
        obj.Salary = parseInt(obj.Salary);
        // if (obj.Salary == '') {
        //     document.querySelector('.salError').style.display = "block";
        //     return;
        // }
        if (isNaN(obj.Salary)) {
            document.querySelector('.salError').style.display = "block";
            return;
        }
        
        obj.Gender = document.querySelector("input[name=gender]:checked").value;
        obj.Department = document.querySelector("#empDept").value;
        this.totalSalary(obj);
    },
    totalSalary(obj) {
        obj.PF = (obj.Salary * 14) / 100;
        obj.HRA = (obj.Salary * 24) / 100;
        obj.total = obj.Salary + obj.HRA + obj.PF;
        this.displaySalary(obj);
    },
    displaySalary(obj) {
        document.querySelector(".child").style.display = "block";
        document.querySelector("#dname").innerHTML = obj.Name;
        document.querySelector("#dage").innerHTML = obj.Age;
        document.querySelector("#dempdept").innerHTML = obj.Department;
        document.querySelector("#dtotal").innerHTML = obj.total;
    }
}