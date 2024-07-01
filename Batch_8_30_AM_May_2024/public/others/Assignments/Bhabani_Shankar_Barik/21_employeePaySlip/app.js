
let readEmployeeData = () => {
    let employeeData = {};

    // read from user
    employeeData.employeeName = document.querySelector('#eName').value;
    employeeData.employeeID = document.querySelector('#eId').value;
    employeeData.employeeDesignation = document.querySelector('#eDesignation').value;
    employeeData.employeeDepartment = document.querySelector('#eDepartment').value;
    employeeData.employeeDOJ =document.querySelector('#eDOJ').value;

    // employee workday details
    employeeData.totalWorkingDays = 30; //Total Working Days
    employeeData.paidDays = 30; //Paid Days
    employeeData.leavestaken = 0; //Leaves Taken
    
    //employee personal info
    employeeData.employeePersonalInfo = {}
    employeeData.employeePersonalInfo.uanNumber = '123456789012'; //UAN
    employeeData.employeePersonalInfo.pfNumber = 'ABC12345678901234';//PF No
    employeeData.employeePersonalInfo.esinumber = 'ESIDEMO1234567890';//ESI No
    employeeData.employeePersonalInfo.bankName = 'Indian Bank';//Bank Name
    employeeData.employeePersonalInfo.bankAccountNumber = '12345678901234';//Bank A/C No


    //Employee Earnings
    employeeData.employeeBasicSalary = 70000; //basic salary

    let result = getEmployeeTotalEarnings(employeeData); 
    employeeData.hra = result[0]; //Hra
    employeeData.conveyanceAllowances = result[1]; //Conveyance Allowances
    employeeData.medicalAllowances = result[2]; //Medical Allowances
    employeeData.otherAllowances = result[3]; // Other Allowances
    employeeData.employeeTotalEarnings = result[4]; //total Earnings

    // Total Deductions
    let deductionResult = getEmployeeTotalDeductions(employeeData);
    employeeData.pf = deductionResult[0]; //pf
    employeeData.healthInsurance = deductionResult[1]; //Health Insurance
    employeeData.professionalTax = deductionResult[2]; // professional tax
    employeeData.employeeTotalDeductions = deductionResult[3]; //total deductions

    //Net Salary will be credit
    employeeData.employeeNetSalary = (employeeData.employeeTotalEarnings - employeeData.employeeTotalDeductions); //net salary
    
    // console.log(employeeData);

    displayEmployeeDetails(employeeData);

}

let getEmployeeTotalEarnings = (obj) => {
        
        let basicSalary = obj.employeeBasicSalary;
        let hra = basicSalary * 0.24;
        let conveyanceAllowances = basicSalary * 0.05;
        let medicalAllowances = basicSalary * 0.40;
        let otherAllowances = basicSalary * 0.10;
        let totalEarnings = basicSalary + hra + conveyanceAllowances + medicalAllowances + otherAllowances;

        return [hra, conveyanceAllowances, medicalAllowances, otherAllowances, totalEarnings];
        
    }

    let getEmployeeTotalDeductions = (obj) => {
        let basicSalary = obj.employeeBasicSalary; 
        let totalSalary = obj.employeeTotalEarnings;

        let pf = basicSalary * 0.12;
        let healthInsurance = basicSalary * 0.05;
        let professionalTax = basicSalary * 0;
        let totalDeductions = (totalSalary - (pf + healthInsurance + professionalTax));

        return [pf, healthInsurance, professionalTax, totalDeductions];

    }


let displayEmployeeDetails = (displayData) => {

    document.querySelector(".displayPayslip").style.display = 'block';

    document.querySelector("#displayEmployeename").innerText = displayData.employeeName;

    document.querySelector("#displayEmployeeID").innerText = displayData.employeeID;

    document.querySelector("#displayDesignation").innerText = displayData.employeeDesignation;

    document.querySelector("#displayDepartment").innerText = displayData.employeeDepartment;

    document.querySelector("#displayDOJ").innerText = displayData.employeeDOJ;

    document.querySelector("#displayUAN").innerText = displayData.employeePersonalInfo.uanNumber;

    document.querySelector("#displayPfNo").innerText = displayData.employeePersonalInfo.pfNumber;

    document.querySelector("#displayESINo").innerText = displayData.employeePersonalInfo.esinumber;

    document.querySelector("#displayBankName").innerText = displayData.employeePersonalInfo.bankName;

    document.querySelector("#displayBankAccountNo").innerText = displayData.employeePersonalInfo.bankAccountNumber;

    document.querySelector("#displayTotalWorkingdays").innerText = displayData.totalWorkingDays;

    document.querySelector("#displayPaidDays").innerText = displayData.paidDays;

    document.querySelector("#displayLeavesTaken").innerText = displayData.leavestaken;

    document.querySelector("#displayBasicSalary").innerText = displayData.employeeBasicSalary;

    document.querySelector("#displayHRA").innerText = displayData.hra; //hra

    document.querySelector("#displayConveyanceAllowances").innerText = displayData.conveyanceAllowances;

    document.querySelector("#displayMedicalAllowances").innerText = displayData.medicalAllowances;

    document.querySelector("#displayOtherAllowances").innerText = displayData.otherAllowances;

    document.querySelector("#displayTotalEarnings").innerText = displayData.employeeTotalEarnings;

    document.querySelector("#displayPf").innerText = displayData.pf;

    document.querySelector("#displayHealthInsurance").innerText = displayData.healthInsurance;

    document.querySelector("#displayProfessionalTax").innerText = displayData.professionalTax;

    document.querySelector("#displayTotalDeductions").innerText = displayData.employeeTotalDeductions;

    document.querySelector("#displayNetSalary").innerText = displayData.employeeNetSalary;
    
}