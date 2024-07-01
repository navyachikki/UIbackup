var empDetails = {

    checkEmpDetails() {

       empDetails.name = document.querySelector("#eName").value;
          if(empDetails.name == '') {
             document.querySelector(".name_ERR").style.display = 'block';
             return;
          }
          else {
            document.querySelector(".name_ERR").style.display = 'none';
          }

       this.age = document.querySelector("#eAge").value;
          if(this.age == '') {
            document.querySelector(".age_ERR").style.display = 'block';
            return;
          }
          else {
            document.querySelector(".age_ERR").style.display = 'none';
          }

       empDetails.gender = document.querySelector("input[name=gender]:checked").value;
       this.empDepartment = document.querySelector("#empDept").value;
            if(this.empDepartment == 'Please Select Department') {
                document.querySelector(".class_ERR").style.display = 'block';
                return;
            }
            else {
               document.querySelector(".class_ERR").style.display = 'none';
            }

       this.empSalary = document.querySelector("#empSalary").value;
           if(this.empSalary == '') {
            document.querySelector(".salary_ERR").style.display = 'block';
            return;
           }
           else {
            document.querySelector(".salary_ERR").style.display = 'none';
           }
           this.empSalary = parseInt(this.empSalary);

           this.emptSalary();
        },
         emptSalary () {
            this.prf = (14 * this.empSalary) / 100;
            this.hra = (24 * this.empSalary) / 100;
            this.emptotSalary = this.prf + this.hra + this.empSalary;

            this.empTax();
         },
          
         empTax () {

            if (this.gender == 'Male') {

              if (this.emptotSalary >= 200000){
                   this.tax = (15*this.emptotSalary)/100;
                   this.tax = parseInt(this.tax);

            } else if (this.emptotSalary >= 100000) {
                 this.tax = (10*this.emptotSalary)/100;
                 this.tax = parseInt(this.tax);

            } else if(this.emptotSalary >= 50000) {
               this.tax = (5*this.emptotSalary)/100;
               this.tax = parseInt( this.tax); 

            } else {
               this.tax = 0;
            }
        }

        else if (this.gender == 'Female') {

             if (this.emptotSalary >= 200000) {
               this.tax = (10*this.emptotSalary)/100;
               this.tax = parseInt( this.tax);

            } else if (this.emptotSalary >= 100000) {
               this.tax = (5*this.emptotSalary)/100;
               this.tax = parseInt( this.tax);  
            } else {
               this.tax = 0;
            }
        }
        this.displayStuDetails();
       },
      displayStuDetails() {

        document.querySelector("#slipBlock").style.display = 'block';

        document.querySelector("#dName").innerText = this.name;
        document.querySelector("#dAge").innerText = this.age;
        document.querySelector("#dGender").innerText = this.gender;
        document.querySelector("#dDepartment").innerText = this.empDepartment;
        document.querySelector("#dTotalSalary").innerText = this.emptotSalary;
        document.querySelector("#dTax").innerText = this.tax;

    }
};