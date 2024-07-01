var getPayslip={
    getDetails(){
        this.name = document.querySelector("#Ename").value;
      if(this.name==''){
        document.querySelector(".nameErr").style.display = "block";
        // document.querySelector(".#hi").innerHTML = "initial";
        return;
       }else{
        document.querySelector(".nameErr").style.display = "none";
       }
     
        this.age = document.querySelector("#eAge").value;        
        this.basicSal = document.querySelector("#eBasciSal").value;
        this.basicSal = parseInt(this.basicSal);
        this.dropDown = document.querySelector("#eDropDown").value;
        this.getPFandHRA();
    },
    getPFandHRA(){
        this.pf = (this.basicSal*12)/100;
        this.hra = (this.basicSal*24)/100;
        this.totalSal = this.basicSal +this.pf+this.hra;
        // console.log(this.totalSal);
        this.diplaySal();
    },
    diplaySal(){
        document.querySelector(".hidden").style.display = "block";
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;        
        document.querySelector("#dempdpt").innerText = this.dropDown;
        document.querySelector("#dtotal").innerText = this.totalSal;

    }

}