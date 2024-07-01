console.log("JS Calling");
var empDetails = [
    {
        empName: 'Kavya',
        empDepartment: 'IT',
        gender: 'Female',
        img: 'https://news.tcc.edu/wp-content/uploads/2019/04/iStock-813019744.jpg',
        basicSal: '100000'

    },
    {
        empName: 'Akhil',
        empDepartment: 'IT',
        gender: 'Male',
        img: 'https://img.freepik.com/free-photo/young-attractive-smiling-student-showing-thumb-up-outdoors-campus-university_8353-6394.jpg',
        basicSal: '500000'
    },
    {
        empName: 'Tanuja',
        empDepartment: 'IT',
        gender: 'Female',
        img: 'https://cch-oakville.ca/wp-content/uploads/2017/08/bigstock-198085276-1024x683.jpg',
        basicSal: '100000'

    },
    {
        empName: 'Chaitu',
        empDepartment: 'IT',
        gender: 'Male',
        img: 'https://img.freepik.com/premium-photo/portrait-smiling-young-college-student-with-books-backpack-against-white-background_662251-2926.jpg?w=2000',
        basicSal: '70000'
    }
];
//Calculate the toatal Salary
var getTotalSal = (basicSal) => {
    var basicSal = parseInt(basicSal);
    var totalSal = 0;
    var pf = (basicSal * 12) / 100;
    pf = parseInt(pf);
    console.log("pf: " + pf);
    var hra = (basicSal * 24) / 100;
    hra = parseInt(hra);
    totalSal = pf + hra + basicSal;
    return [pf, hra, totalSal];
}
//Calculate the tax
var getTax = (eDetails) => {
    var totalSal = parseInt(eDetails.totalSal);
    var gender = eDetails.gender.toLocaleLowerCase();
    var tax = 0;
    if (gender == 'male') {
        if (totalSal >= 200000) {
            tax = (totalSal * 15) / 100;
        } else if (totalSal >= 150000) {
            tax = (totalSal * 10) / 100;
        } else if (totalSal >= 100000) {
            tax = (totalSal * 5) / 100;
        } else {
            console.log("The Tax paid is:" + tax);
        }
    } else if (gender == 'female') {
        if (totalSal >= 200000) {
            tax = (totalSal * 10) / 100;
        } else if (totalSal >= 150000) {
            tax = (totalSal * 5) / 100;
        } else {
            console.log("The Tax paid is:" + tax);
        }
    } else {
        console.log("The Tax paid is:" + tax);
        console.log("Please Select Correct Gender Male or Female ");
    }
    return tax;
}

var loadEmpDetails = (eDetails) => {
    var contentLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "eDetails");

    var li1 = document.createElement("li");
    li1.innerText = 'Employee Name:' + eDetails.empName;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Deprtment:' + eDetails.empDepartment;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = 'Gender:' + eDetails.gender;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("src", eDetails.img);
    li4.append(img);
    ulTag.append(li4);

    var li5 = document.createElement("li");
    li5.innerText = 'Basic Salary:' + eDetails.basicSal;
    ulTag.append(li5);

    //totalSal call the function
    var result = getTotalSal(eDetails.basicSal);
    eDetails.totalSal = result[2];
    eDetails.hra = result[1];
    eDetails.pf = result[0];

    //Tax Call the function
    var tax = getTax(eDetails);
    eDetails.tax = tax;

    var li6 = document.createElement("li");
    li6.innerText = "PF:" + eDetails.pf;
    ulTag.append(li6);

    var li7 = document.createElement("li");
    li7.innerText = "HRA:" + eDetails.hra;
    ulTag.append(li7);

    var li8 = document.createElement("li");
    li8.innerText = "Total Salary:" + eDetails.totalSal;
    ulTag.append(li8);

    var li9 = document.createElement("li");
    li9.innerText = "TAX:" + eDetails.tax;
    ulTag.append(li9);

    contentLi.append(ulTag);

    document.querySelector(".contentEmpDetails").append(contentLi);
}

for (var i = 0; i < empDetails.length; i++) {
    loadEmpDetails(empDetails[i]);
}

/* document.querySelector(".header").style.color = "blue";
document.querySelector(".header").style['background-color'] = "yellow";
 */
