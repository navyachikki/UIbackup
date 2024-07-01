var getEmpDetails={

    
    validateName(event)
    {
        console.log("KeyPress");
        console.log(event);
        if((event.keyCode >=65 && event.keyCode <=90) || (event.keyCode >=97 && event.keyCode <=122))
        {
            return true;
        }
        else
        {
            return false;
        }
    },

    validateAge(event)
    {
        console.log("KeyPress");
        console.log(event);
        if((event.keyCode >=48 && event.keyCode <=57))
        {
            return true;
        }
        else
        {
            return false;
        }
    },


    readData()
    {
        
        this.ename = document.querySelector("#nameId").value;
        if(this.ename == '')
            {
                document.querySelector(".nameError").style.display='block';
                return;
            }
            else{
                document.querySelector(".nameError").style.display='none';
            }
        
       
        this.eage = document.querySelector("#ageId").value;
        if(this.eage == '')
            {
                document.querySelector(".ageError").style.display='block';
                return;
            }
            else{
                document.querySelector(".ageError").style.display='none';
            }
        
        this.egender = document.querySelector("input[name=gender]:checked").value;
        this.edepartment = document.querySelector("#departmentId").value;
        this.basicSal = document.querySelector("#basicSalId").value;
        //this.basicSal=parseInt(this.basicSal);
        if(this.basicSal == '')
            {
                document.querySelector(".bsError").style.display='block';
                return;
            }
            else{
                document.querySelector(".bsError").style.display='none';
            }
        
        this.calculateTotalSal();
    },
    calculateTotalSal()
    {
        this.pf = (14 * this.basicSal)/100;
        this.hra = (25 * this.basicSal)/100;
        this.total = parseInt(this.basicSal) + parseInt(this.pf) + parseInt(this.hra);
        
        this.showData();
    },
    checkTaxAmount()
    {
        this.tax=0;
        if(this.gender == 'Male')//Male
           if(this.total >=200000)
            {
                this.tax=(15 * this.basicSal)/100;
                document.querySelector("#taxId2").innerHTML="You have to pay the tax "+this.tax;
            }
            else if(this.total >=15000)
            {
                this.tax=(10 * this.basicSal)/100;
                document.querySelector("#taxId2").innerHTML="You have to pay the tax "+this.tax;
            }
            else if(this.total >=10000)
            {
                this.tax=(5 * this.basicSal)/100;
                document.querySelector("#taxId2").innerHTML="You have to pay the tax "+this.tax;
            }
            else{

                document.querySelector("#taxId2").innerHTML="No need to pay !";
            }
        else //Female
        {
            if(this.total >=150000)
                {
                    this.tax=(10 * this.basicSal)/100;
                    document.querySelector("#taxId2").innerHTML="You have to pay the tax "+this.tax;
                }
                else if(this.total >=10000)
                {
                    this.tax=(5 * this.basicSal)/100;
                    document.querySelector("#taxId2").innerHTML="You have to pay the tax "+this.tax;
                }
                else{
    
                    document.querySelector("#taxId2").innerHTML="No need to pay !";
                }

        }    
        

    },
    showData()
    {
		document.querySelector("#u2").style.display='block';
        console.log(this.ename+" "+this.eage+" "+this.total+" "+this.egender+" ");
        document.querySelector("#nameId2").innerHTML=this.ename;
        document.querySelector("#ageId2").innerHTML=this.eage;
        document.querySelector("#departmentId2").innerHTML=this.edepartment;
        document.querySelector("#genderId2").innerHTML=this.egender;
        document.querySelector("#basicSalId2").innerHTML=this.basicSal;
        document.querySelector("#totalSalId2").innerHTML=this.total; 
        this.checkTaxAmount();    
    },
    
};




