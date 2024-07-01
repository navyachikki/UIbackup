//Read the emp details dynamically using json object
var readEmpData = () => { 
    var empData = {};
    console.log("JS Calling");
    empData.empName = document.querySelector("#empName").value;
    empData.empNumber = document.querySelector("#empNum").value;
    empData.empNumber = parseInt(empData.empNumber);
    empData.empDepartment = document.querySelector("#empDep").value;
    empData.gender = document.querySelector("input[name= gender]:checked").value;
    empData.basicSalary = document.querySelector("#basicSal").value;
    empData.basicSalary = parseInt(empData.basicSalary);

    empData.bankNum = 998772;
    empData.bankName = "ICICI";
    empData.pfAcNumber = 888888;
    
    //get total earnings hra+medicalAllowence+convencyAllow+basicsalary
    var totalEarnings = getTotalEarnings(empData);
    empData.hra=totalEarnings[0];    
    empData.medicalAllowence=totalEarnings[1];//medical
    empData.convencyAllow = totalEarnings[2];
    empData.totalEarns = totalEarnings[3];
    
    //display in console
    console.log("hrra:"+ empData.hra);
    console.log("totalEarnings:"+totalEarnings);

    // get total deductions pf+tax;
    var totalDeductions = getTotalDeductions(empData);
    empData.pf = totalDeductions[0];
    empData.tax = totalDeductions[1];
    empData.totalDeductions =totalDeductions[2];

    //console
    console.log("pf:"+ empData.pf);
    console.log("totalDeductions:"+totalDeductions);

    // get netPay = total earnings - total deductions
    var netPay = empData.totalEarns - empData.totalDeductions;
    console.log("netPay" + netPay);
    empData.netPay = parseInt(netPay);
    console.log("netPay" + empData.netPay) ;
    displayEmpData(empData);

}
//Calcuate the total Earnings
var getTotalEarnings = (obj) =>{
    var basicSalary =obj.basicSalary;

    var hra =parseInt( (basicSalary * 24) / 100);
    var medicalAllowence = parseInt((basicSalary * 5) /100);
    var convencyAllow= parseInt((basicSalary * 5)) /100;

    var totalEarns = basicSalary + hra + medicalAllowence+convencyAllow;
    console.log("hra"+hra);
    return [hra,medicalAllowence,convencyAllow,totalEarns];
}

//calculate the total deductions
var getTotalDeductions = (obj) =>{
    var basicSalary = obj.basicSalary;
    var totalEarnings = obj.totalEarns;
    var pf=parseInt((basicSalary * 12) / 100);
    var tax = parseInt((totalEarnings * 2) / 100);
    
    var totalDeductions =pf + tax ;
    return [pf,tax, totalDeductions];
}
// display data in the page
var displayEmpData = (obj) => {
    document.querySelector(".displayPayslip").style.display = 'block';


    document.querySelector("#d_empName").innerHTML = obj.empName;
    document.querySelector("#d_empNum").innerHTML = obj.empNumber;
    document.querySelector("#d_empDep").innerText =obj.empDepartment;
    
    document.querySelector("#d_bankNum").innerText = obj.bankNum;
    document.querySelector("#d_bankName").innerText = obj.bankName;
    document.querySelector("#d_pfAcNum").innerText = obj.pfAcNumber;

    document.querySelector("#d_empBasicSal").innerText= obj.basicSalary;
    document.querySelector("#d_empHra").innerText= obj.hra;
    document.querySelector("#d_medicalAllowence").innerText= obj.medicalAllowence;
    document.querySelector("#d_convencyAllow").innerText= obj.convencyAllow;
    document.querySelector("#d_empTotalSal").innerText= obj.totalEarns;
    
    document.querySelector("#d_pf").innerText=obj.pf;
    document.querySelector("#d_empProfTax").innerText=obj.tax;
    document.querySelector("#d_totalDeductions").innerText=obj.totalDeductions;
    document.querySelector("#d_netPay").innerText=obj.netPay;
    
}