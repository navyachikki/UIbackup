var empDetails =[
    {
        id :1,
        name : 'Shraddha',
        designation : 'Developer',
        basicSal :50000,
        // dob : 15/1/1995,
        image :'stud1.jpg'
    },

    {
        id :2,
        name : 'Riya',
        designation : 'Tester',
        basicSal :10000,
        // dob : 20/12/1996,
        image :'stud1.jpg'
    },

    {
        id :3,
        name : 'Radha',
        designation : 'Support',
        basicSal :25000,
        // dob : 26/2/1994,
        image :'stud1.jpg'
    },

    {
        id :4,
        name : 'Seema',
        designation : 'Analyzer',
        basicSal :80000,
        // dob : 25/10/1995,
        image :'stud1.jpg'
    },
    {
        id :5,
        name : 'Priya',
        designation : 'Operator',
        basicSal :65000,
        image :'stud1.jpg'
    }
];

var loadDetails =(eDetails)=>{
    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
     ulTag.setAttribute("class", "edetails");
    // ulTag.classList.add("eDetails");

    var li5 = document.createElement("li");
        li5.innerText = "ID :"+eDetails.id;
        ulTag.append(li5);


        var li1 = document.createElement("li");
        li1.innerText = "Employee Name :"+eDetails.name;
        ulTag.append(li1);

        var li2 = document.createElement("li");
        li2.innerText = "Designation :"+eDetails.designation;
        ulTag.append(li2);

        // var li3 = document.createElement("li");
        // li3.innerText = "Employee_DOB :"+eDetails.dob;
        // ulTag.append(li3);

        var li4 = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute("src", eDetails.image);
        
        li4.append(img);
        ulTag.append(li4);

        var li6 = document.createElement("li");
        li6.innerText = "BasicSalary :"+eDetails.basicSal;
        ulTag.append(li6);
        
    mainLi.append(ulTag);
    document.querySelector(".mainProductDetails").append(mainLi);
}
    for(i=0; i<empDetails.length; i++){

    empDetails.pf = (empDetails[i].basicSal*10)/100;
}
for (var i = 0 ; i < empDetails.length; i++) {
    loadDetails(empDetails[i] , i);
}