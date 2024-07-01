

let employeeDetails =  [
    {
        employeeImage: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600",
        employeeName : "Sarah Grace Lancaster",
        employeeAge: 21,
        employeeGender: "Female",
        employeeDepartment: "IT",
        employeeBasicSalary: '180000'
    },
    {
        employeeImage: "https://images.pexels.com/photos/1427889/pexels-photo-1427889.jpeg?auto=compress&cs=tinysrgb&w=600",
        employeeName : "William Jones",
        employeeAge: 23,
        employeeGender: "Male",
        employeeDepartment: "IT",
        employeeBasicSalary: '120000'
    },
    {
        employeeImage: "https://images.pexels.com/photos/1984116/pexels-photo-1984116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        employeeName : "Mrunal Thakur",
        employeeAge: 21,
        employeeGender: "Female",
        employeeDepartment: "IT",
        employeeBasicSalary: '140000'
    },
    {
        employeeImage: "https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=600",
        employeeName : "Sang-woo Lee",
        employeeAge: 22,
        employeeGender: "Male",
        employeeDepartment: "IT",
        employeeBasicSalary: '130000'
    },
    {
        employeeImage: "https://images.pexels.com/photos/3342981/pexels-photo-3342981.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        employeeName : "Lily Harris",
        employeeAge: 22,
        employeeGender: "Female",
        employeeDepartment: "IT",
        employeeBasicSalary: '130000'
    },
    
];

let employeePfAndHraAndTotalSalary = (basicSalary) => {
        basicSalary = Number(basicSalary);
        let pf = basicSalary * 0.12;
        let hra = basicSalary * 0.24;
        let totalSalary = basicSalary + pf + hra;
        
        return [pf, hra, totalSalary];
}

let loadEmployeeDetails = (eDetails)  => {

    let mainLi = document.createElement("li");
    let ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "edetails")

    //Employee's Image
    let liImage = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute("src", eDetails.employeeImage);
    liImage.append(img)
    ulTag.append(liImage);
    
    //Employee's Name
    let liName = document.createElement("li");
    liName.innerText = 'Name: ' + eDetails.employeeName;
    ulTag.append(liName);

    //Employee's Age
    let liAge = document.createElement("li");
    liAge.innerText = 'Age: ' + eDetails.employeeAge;
    ulTag.append(liAge);

    //Employee's Gender
    let liGender = document.createElement("li");
    liGender.innerText = 'Gender: ' + eDetails.employeeGender;
    ulTag.append(liGender);

    //Employee's Department
    let liDepartment = document.createElement("li");
    liDepartment.innerText = 'Department: ' + eDetails.employeeDepartment;
    ulTag.append(liDepartment);

    //Employee's Basic Salary
    let liBasicSalary = document.createElement("li");
    liBasicSalary.innerText = 'Basic Salary: ' + eDetails.employeeBasicSalary;
    ulTag.append(liBasicSalary);

    //function call and hold the data
    let result = employeePfAndHraAndTotalSalary(eDetails.employeeBasicSalary)
    eDetails.pf = result[0];
    eDetails.hra = result[1];
    eDetails.totalSalary = result[2];

    //Employee's pf
    let liPf = document.createElement("li");
    liPf.innerText = 'Pf: ' + eDetails.pf;
    ulTag.append(liPf);

    //Employee's hra
    let liHra = document.createElement("li");
    liHra.innerText = 'HRA: ' + eDetails.hra;
    ulTag.append(liHra);

    //Employee's Total Salary
    let liTotalSalary = document.createElement('li');
    liTotalSalary.innerText = "Total Salary: " + eDetails.totalSalary;
    ulTag.append(liTotalSalary);


    mainLi.append(ulTag);

    // console.log(mainLi);

    document.querySelector('.employeeDetails').append(mainLi);
    
}

for (let i = 0; i < employeeDetails.length; i++ ){
    loadEmployeeDetails(employeeDetails[i]);
}
