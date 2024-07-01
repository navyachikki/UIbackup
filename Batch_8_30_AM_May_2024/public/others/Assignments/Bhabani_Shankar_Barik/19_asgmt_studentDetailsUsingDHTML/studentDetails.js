
let studentDetails = [
    {
        studentImage: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600',
        studentName: "Sarah Smith",
        studentDateOfBirth : "21-06-2001",
        studentGender: "Female",
        studentAddress: "Seattle, Washingtone, USA",
        studentContactInformation: {
            email: "sarah@xyz.ai",
            phoneNumber: "(555) 123-4567",
            emergencyContacts:{
                name: "John Smith",
                relationship: "Parent",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "John Smith",
            contactInformation: "(555) 524-4555",
        },
        universityName: "Stanford University",
        studentIDNumber: 123456789,
        year: "Freshman",
        ethnicity: "Caucasian",
        nationality: "American",
        languageSpoken: "English"
    },
    {
        studentImage: 'https://images.pexels.com/photos/1427889/pexels-photo-1427889.jpeg?auto=compress&cs=tinysrgb&w=600',
        studentName: "William Jones",
        studentDateOfBirth : "15-03-2002",
        studentGender: "Male",
        studentAddress: "San Jose, California, USA",
        studentContactInformation: {
            email: "jones@xyz.ai",
            phoneNumber: "(555) 223-4767",
            emergencyContacts:{
                name: "David Jones",
                relationship: "Parent",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "David Jones",
            contactInformation: "(555) 544-7589",
        },
        universityName: "Stanford University",
        studentIDNumber: 12346790,
        year: "Freshman",
        ethnicity: "Caucasian",
        nationality: "American",
        languageSpoken: "English, Italian"
    },
    {
        studentImage: 'https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        studentName: "Mrunal Thakur",
        studentDateOfBirth : "30-10-2002",
        studentGender: "Female",
        studentAddress: "Kolkata, WestBengal, India",
        studentContactInformation: {
            email: "mrunal@xyz.com",
            phoneNumber: "(555) 223-4767",
            emergencyContacts:{
                name: "Vijay Thakur",
                relationship: "Parent",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "Vijay Thakur",
            contactInformation: "(555) 544-7589",
        },
        universityName: "Stanford University",
        studentIDNumber: 12346727,
        year: "Freshman",
        ethnicity: "Indo-Aryans",
        nationality: "Indian",
        languageSpoken: "English, Hindi, Bengali"
    },
    {
        studentImage: 'https://images.pexels.com/photos/1984116/pexels-photo-1984116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        studentName: "Emma Williams",
        studentDateOfBirth : "15-12-2001",
        studentGender: "Female",
        studentAddress: "San Diego, California, USA",
        studentContactInformation: {
            email: "emma@xyz.ai",
            phoneNumber: "(555) 213-4767",
            emergencyContacts:{
                name: "Robert Williams",
                relationship: "Parent",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "Robert Williams",
            contactInformation: "(555) 544-7589",
        },
        universityName: "Stanford University",
        studentIDNumber: 12346797,
        year: "Freshman",
        ethnicity: "Caucasian",
        nationality: "American",
        languageSpoken: "English, Italian"
    },
    {
        studentImage: 'https://images.pexels.com/photos/3342981/pexels-photo-3342981.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        studentName: "Lily Harris",
        studentDateOfBirth : "15-07-2002",
        studentGender: "Female",
        studentAddress: "Los Angeles, California, USA",
        studentContactInformation: {
            email: "lily@xyz.ai",
            phoneNumber: "(555) 223-4767",
            emergencyContacts:{
                name: "Thomas Harris",
                relationship: "Parent",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "Thomas Harris",
            contactInformation: "(555) 544-7589",
        },
        universityName: "Stanford University",
        studentIDNumber: 12346794,
        year: "Freshman",
        ethnicity: "Caucasian",
        nationality: "American",
        languageSpoken: "English, Italian"
    },
    {
        studentImage: 'https://images.pexels.com/photos/8373523/pexels-photo-8373523.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        studentName: "Elizabeth White",
        studentDateOfBirth : "23-08-2002",
        studentGender: "Female",
        studentAddress: "Chicago, Illinois, USA",
        studentContactInformation: {
            email: "Elizabeth@xyz.com",
            phoneNumber: "(555) 223-4767",
            emergencyContacts:{
                name: "Samuel Taylor",
                relationship: "Uncle",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "Joseph Matthew white",
            contactInformation: "(555) 444-7489",
        },
        universityName: "Stanford University",
        studentIDNumber: 12346767,
        year: "Freshman",
        ethnicity: "Caucasian",
        nationality: "American",
        languageSpoken: "English, German"
    },
    {
        studentImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        studentName: "Mandela Zulu ",
        studentDateOfBirth : "05-12-2001",
        studentGender: "Male",
        studentAddress: "Cairo, Egypt, Africa",
        studentContactInformation: {
            email: "mandela@xyz.ai",
            phoneNumber: "(555) 223-4767",
            emergencyContacts:{
                name: "Thomas Taylor",
                relationship: "Brother",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "Malik Toure",
            contactInformation: "+234 123 456 7890",
        },
        universityName: "Stanford University",
        studentIDNumber: 12346723,
        year: "Freshman",
        ethnicity: "Zulu",
        nationality: "Egyptian",
        languageSpoken: "Arabic, English,"
    },
    {
        studentImage: 'https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=600',
        studentName: "Sang-woo Lee",
        studentDateOfBirth : "17-09-2002",
        studentGender: "Male",
        studentAddress: "Seoul, Seoul Special City, South Korea",
        studentContactInformation: {
            email: "lee@abc.com",
            phoneNumber: "(555) 293-4567",
            emergencyContacts:{
                name: "Michael Johnson",
                relationship: "Uncle",
                phone: "(555) 345-5675"
            }
        },
        studentParentOrGuardianInformation: {
            Father: "Dong-geun Kim",
            contactInformation: "010-5687-3478",
        },
        universityName: "Stanford University",
        studentIDNumber: 12346745,
        year: "Freshman",
        ethnicity: "Korean",
        nationality: "South Korean",
        languageSpoken: "Korean,English,"
    }
    
];

let loadStudentDetails = (sDetails) => {
    let mainLi = document.createElement("li");
    let ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "sdetails");

    //Image
    let liImage = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute("src", sDetails.studentImage);
    liImage.append(img);
    ulTag.append(liImage);

    //Name
    let liName = document.createElement("li");
    liName.innerText = 'Student Name: ' + sDetails.studentName;
    ulTag.append(liName);

    //Date of birth
    let liDOB = document.createElement("li");
    liDOB.innerText = 'Date of Birth: ' + sDetails.studentDateOfBirth;
    ulTag.append(liDOB);

    //Gender
    let liGender = document.createElement("li");
    liGender.innerText = "Gender: " + sDetails.studentGender;
    ulTag.append(liGender);
    
    //Address
    let liAddress = document.createElement("li");
    liAddress.innerText = 'Address: ' + sDetails.studentAddress;
    ulTag.append(liAddress);

    //Contact Information
    let liContactInformation = document.createElement("li");
    liContactInformation.innerText = 'Contact Information: ';
    ulTag.append(liContactInformation);

    //Create first sub ul tag
    let subContactUlTag = document.createElement("ul");
    subContactUlTag.setAttribute("class", "sub-details");

    let liSubContactUlLiOne = document.createElement('li');
    liSubContactUlLiOne.innerText = 'Email: ' + sDetails.studentContactInformation.email;
    subContactUlTag.append(liSubContactUlLiOne);
    
    let liSubContactUlLiTwo = document.createElement("li");
    liSubContactUlLiTwo.innerText = 'Phone Number: ' + sDetails.studentContactInformation.phoneNumber;
    subContactUlTag.append(liSubContactUlLiTwo);

    let liSubContactUlLiThree = document.createElement("li");
    liSubContactUlLiThree.innerText = 'Emergency Contacts: ';
    subContactUlTag.append(liSubContactUlLiThree);

    // second sub ul tag created
    let secondSubUlTag = document.createElement("ul");
    secondSubUlTag.setAttribute("class", "sub-details");

    let secondSubUlTagliOne = document.createElement("li");
    secondSubUlTagliOne .innerText = 'Name: ' + sDetails.studentContactInformation.emergencyContacts.name;
    secondSubUlTag.append(secondSubUlTagliOne );

    let secondSubUlTagliTwo = document.createElement("li");
    secondSubUlTagliTwo .innerText = 'Relationship: ' + sDetails.studentContactInformation.emergencyContacts.relationship;
    secondSubUlTag.append(secondSubUlTagliTwo );

    let secondSubUlTagliThree = document.createElement("li");
    secondSubUlTagliThree.innerText = 'Phone: ' + sDetails.studentContactInformation.emergencyContacts.phone;
    secondSubUlTag.append(secondSubUlTagliThree);

    subContactUlTag.append(secondSubUlTag);
    liContactInformation.append(subContactUlTag);

    // parent or guardian information
    let liParentOrGuardianInfo = document.createElement("li");
    liParentOrGuardianInfo.innerText = 'Parent/Guardian Information: ';
    ulTag.append(liParentOrGuardianInfo);

    // first sub ul tag of parent or guardian information
    let subUlTag = document.createElement("ul");
    subUlTag.setAttribute("class", "sub-details");

    let subUlTagSubLiOne = document.createElement("li");
    subUlTagSubLiOne.innerText = 'Father: ' + sDetails.studentParentOrGuardianInformation.Father;
    subUlTag.append(subUlTagSubLiOne);

    let subUlTagSubLiTwo = document.createElement("li");
    subUlTagSubLiTwo.innerText = 'Contact Information: ' + sDetails.studentParentOrGuardianInformation.contactInformation;
    subUlTag.append(subUlTagSubLiTwo);

    liParentOrGuardianInfo.append(subUlTag);

    // University Name
    let liUniversityName = document.createElement("li");
    liUniversityName.innerText = 'University Name: ' + sDetails.universityName;
    ulTag.append(liUniversityName);

    //Id number
    let liIdNumber = document.createElement("li");
    liIdNumber.innerText = 'ID Number: ' + sDetails.studentIDNumber;
    ulTag.append(liIdNumber);

    //Year
    let liYear = document.createElement("li");
    liYear .innerText = 'Year: ' + sDetails.year;
    ulTag.append(liYear );

    //Ethnicity
    let liEthnicity = document.createElement('li');
    liEthnicity.innerText = 'Ethnicity: ' + sDetails.ethnicity;
    ulTag.append(liEthnicity);

    //Nationality
    let liNationality = document.createElement("li");
    liNationality.innerText = 'Nationality: ' + sDetails.nationality;
    ulTag.append(liNationality);

    //Language Spoken
    let liLanguageSpoken = document.createElement("li");
    liLanguageSpoken.innerText = 'Language Spoken: ' + sDetails.languageSpoken;
    ulTag.append(liLanguageSpoken);

    mainLi.append(ulTag);

    document.querySelector(".mainStudentDetails").append(mainLi);
}

for(let i = 0; i < studentDetails.length; i++){
    loadStudentDetails(studentDetails[i]);
}

