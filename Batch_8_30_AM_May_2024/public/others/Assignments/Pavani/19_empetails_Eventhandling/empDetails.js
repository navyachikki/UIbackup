var empDetails = [
    {
        Name: "Priya",
        age: 21,
        gender: "Female",
        department: "IT",
        BasicSalary: 450000,
        image: 'file:///C:/UI_Fullstack/UI_Classes/Images/Screenshot%202024-05-20%20154312.png'
    },
    {
        Name: "Akash",
        age: 21,
        gender: "male",
        department: "IT",
        BasicSalary: 450500,
        image: 'file:///C:/UI_Fullstack/UI_Classes/Images/Screenshot%202024-05-20%20153146.png'
    },
    {
        Name: "Harika",
        age: 22,
        gender: "Female",
        department: "IT",
        BasicSalary: 350012,
        image: 'file:///C:/UI_Fullstack/UI_Classes/Images/Screenshot%202024-05-20%20154312.png'
    },
    {
        Name: "Sandya",
        age: 23,
        gender: "Female",
        department: "AWS",
        BasicSalary: 220000,
        image: 'file:///C:/UI_Fullstack/UI_Classes/Images/Screenshot%202024-05-20%20154312.png'
    },
    {
        Name: "Arun",
        age: 21,
        gender: "male",
        department: "IT",
        BasicSalary: 450500,
        image: 'file:///C:/UI_Fullstack/UI_Classes/Images/Screenshot%202024-05-20%20153146.png'
    },
    {
        Name: "Nani",
        age: 22,
        gender: "male",
        department: "IT",
        BasicSalary: 550000,
        image: 'file:///C:/UI_Fullstack/UI_Classes/Images/Screenshot%202024-05-20%20153146.png'
    }
];

var getTotalsalary = (BasicSalary) => {
    var totalSalary = 0;
    var pf = BasicSalary * 0.12;
    var hra = BasicSalary * 0.24;
    var totalSalary = BasicSalary + pf + hra;
    return [pf, hra, totalSalary];
}

var loadEmpData = (data) => {
    var mainliTag = document.createElement("li");

    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "empData");

    var li1 = document.createElement("li");
    li1.innerText = "empName : " + data.Name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = "empGender : " + data.gender;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = "empDepartment : " + data.department;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = "empBasicSalary : " + data. BasicSalary;
    ulTag.append(li4);

    var li9 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", data.image)
    li9.append(imgTag);
    ulTag.append(li9);

    var result = getTotalsalary(data.BasicSalary)
    data.pf = result[0];
    data.hra = result[1];
    data.totalSalary = result[2];


    var li6 = document.createElement("li");
    li6.innerText = 'Pf is : ' + data.pf;
    ulTag.append(li6);

   
    var li7 = document.createElement("li");
    li7.innerText = 'hra is : ' + data.hra;
    ulTag.append(li7);

    
    var li8 = document.createElement('li');
    li8.innerText = "Total Salary: " + data.totalSalary;
    ulTag.append(li8);

    mainliTag.append(ulTag);

    document.querySelector(".EmployeeDetails").append(mainliTag);
}

for (var i = 0; i < empDetails.length; i++) {
    loadEmpData(empDetails[i]);

}


