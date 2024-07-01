var empDetails = {

    empInfo() {
        empDetails.name = document.querySelector("#eName").value;
        if (empDetails.name == "") {
            document.querySelector(".nameErr").style.display="block";
            return;
        }
        else
        document.querySelector(".nameErr").style.display="none";

        empDetails.age = document.querySelector("#eAge").value;
        if (empDetails.age == "") {
            document.querySelector(".ageErr").style.display="block";
            return;
        }
        else
        document.querySelector(".ageErr").style.display="none";

        empDetails.gender = document.querySelector("input[name='gender']:checked").value;
        
        this.salary = document.querySelector("#eSal").value;
        this.salary=parseInt(this.salary);
        if (this.salary == "") {
            document.querySelector(".salErr").style.display="block";
            return;
        }
        else
        document.querySelector(".salErr").style.display="none";

        empDetails.branch = document.querySelector("#eBranch").value;

        this.getSal();
    },

    getSal() {
        this.pf = (this.salary * 14) / 100;
        this.hra = (this.salary * 24) / 100;
        this.totalSal=0;
        this.totalSal = this.pf + this.hra + this.salary;
    
        this.display();
    },

    display() {
        document.querySelector("#dispDetails").style.display="block";
        document.querySelector("#dname").innerHTML = this.name;
        document.querySelector("#dage").innerHTML = this.age;
        document.querySelector("#dsal").innerHTML = this.totalSal;
        document.querySelector("#dgender").innerHTML = this.gender;
        document.querySelector("#dbranch").innerHTML = this.branch;


    }


};