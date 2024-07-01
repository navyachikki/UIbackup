

contactDetails.lastName
contactDetails.contactNumber.office
contactDetails.contactNumber.prsnl[1] 
contactDetails.address.prsnl.stateInfo.code

var contactDetails = {
    firstName: "prasad",
    lastName: 'abc',
    contactNumber: {
        prsnl: [98345345354, 9234563453454],
        office: '040-223423432'
    },
    address:  {
        prsnl: {
            stateInfo: {
                name: 'Telangana',
                code: 'TG'
            },
            countryName: "India",
            dno: '23/A',
            streetName: 'ABC',
            landMark: 'Near to my home'
        },
        office: {
            country: {
                name: 'USA',
                code: 'US01'
            },
            buldingNo: '5A',
            floor: '2'
        }
    },
    mailId: {
        prsnl: ['abc@gmail.com', 'test@yahoo.com'],
        office: 'abc@offce.com'
    },
    dob: {
        date: 9,
        month: 'Jan'
    },
    gender: 'Male',
    socialId: {
        twitter: 'abc1',
        fb: '12'
    },
    pic: 'data/img.jpeg'

}