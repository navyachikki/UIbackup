var employeeDetails=[
   {
    name:'Raj',
    age:32,
    image:'images/emp1.png',
    basicSal:200000,
    gender:'Male',
    department:'IT'
 } ,
 {
    name:'Rajesh',
    age:23,
    image:'images/emp2.png',
    basicSal:300000,
    gender:'Male',
    department:'Finance'
 } ,
 {
    name:'Raj',
    age:32,
    image:'images/emp1.png',
    basicSal:200000,
    gender:'Male',
    department:'IT'
 } ,
 {
    name:'Sai',
    age:24,
    image:'images/emp2.png',
    basicSal:300000,
    gender:'Male',
    department:'Marketing'
 } ,
 {
    name:'Ryan',
    age:23,
    image:'images/emp2.png',
    basicSal:100000,
    gender:'Male',
    department:'Manager'
 } ,
 {
    name:'Satya',
    age:30,
    image:'images/emp2.png',
    basicSal:300000,
    gender:'Male',
    department:'Sales'
 } ,
 {
    name:'Rajesh',
    age:23,
    image:'images/emp2.png',
    basicSal:300000,
    gender:'Male',
    department:'Finance'
 } ,{
    name:'Rajesh',
    age:23,
    image:'images/emp2.png',
    basicSal:300000,
    gender:'Male',
    department:'Finance'
 } 
 
 
];

  var pfandHraCalculation=(employeeDetails)=>{
    
    employeeDetails.pf = (14 * employeeDetails.basicSal) / 100;
    employeeDetails.hra = (24 * employeeDetails.basicSal) / 100;

    employeeDetails.totalSal = employeeDetails.basicSal + employeeDetails.pf +employeeDetails.hra;
    

    
}
var empRendering=(employeeDetails)=>{
    
        var mainLi=document.createElement("li");
        mainLi.setAttribute("class","employee");
    var ulTag=document.createElement("ul");
    var liEmpName=document.createElement("li");
    liEmpName.innerText="EmpName:"+employeeDetails.name;
    ulTag.append(liEmpName);

    var liEmpAge=document.createElement("li");
    liEmpAge.innerText="EmpAge:"+employeeDetails.age;
    ulTag.append(liEmpAge);

    var liGender=document.createElement("li");
    liGender.innerText="Gender:"+employeeDetails.gender;
    ulTag.append(liGender);

    var liDepartment=document.createElement("li");
    liDepartment.innerText="Gender:"+employeeDetails.department;
    ulTag.append(liDepartment);

    var liEmpBasicSal=document.createElement("li");
    liEmpBasicSal.innerText="Basic Sal"+employeeDetails.basicSal;
    ulTag.append(liEmpBasicSal);

    var liPf=document.createElement("li");
    liPf.innerText="Pf:"+employeeDetails.pf;
    ulTag.append(liPf);

    var liHRA=document.createElement("li");
    liPf.innerText="HRA:"+employeeDetails.hra;
    ulTag.append(liHRA);

    var liTotalSalary=document.createElement("li");
    liTotalSalary.innerText="TotalSalary:"+employeeDetails.totalSal;
    ulTag.append(liTotalSalary);

    var liImg = document.createElement("li");
    var imgAtt = document.createElement("img");
    imgAtt.setAttribute("src",employeeDetails.image);
    liImg.append(imgAtt);
    ulTag.append(liImg);
    mainLi.append(ulTag);
    document.querySelector("#container").append(mainLi);
    
}
var empDisplay=()=>{
    for(var i=0;i<employeeDetails.length;i++){
        pfandHraCalculation(employeeDetails[i]);
        empRendering(employeeDetails[i]);
    }
}
empDisplay();

