var userDtls = {};

var validateSpace = (event) => {
    if (event.keyCode == 32) {
        return false;
    } else {
        return true;
    }
};

var registerUser =() => {
    userDtls.JsonUName = document.querySelector("#userName").value;
    userDtls.JsonUName = userDtls.JsonUName.trim();
    if (userDtls.JsonUName == '') {
        document.querySelector(".IdError").style.display = 'block';
        return;
    } else
    {
        document.querySelector(".IdError").style.display = 'none';
    }

    userDtls.JsonUage = document.querySelector("#userAge").value;
    if (userDtls.JsonUage == '' || userDtls.JsonUage < 21) {
        document.querySelector(".ageCompValidation").style.display = 'block';
        return;
    } else {
        document.querySelector(".ageCompValidation").style.display = 'none';
    }
    
    //FuncCountryCombo();
    console.log(userDtls);
};


validateNumber  = () => {
    if (event.keyCode >= 48 && event.keyCode <= 57)
    {
        return true;
    }else {
        return false;
    }
};

var countryData = {
    "Pakistan": {
        "Balochistan": ["Quetta", "Turbat", "Khuzdar", "Chaman", "Gwadar"],
        "Punjab": ["Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Multan"],
        "Sindh": ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Thul"],
    },
    "India": {
        "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad"],
        "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
    }
};

FuncCountryCombo = () => {
    var countryList = document.querySelector("#cOption");
    countryList.innerHTML = '<option value="a">Select Country</option>';
    for (var Country in countryData) {
        var option = document.createElement('option');
        option.text = Country;
        option.value = Country;
        countryList.appendChild(option);
    }
};

FuncCountryCombo();


function stateData() {
    var country = document.querySelector("#cOption");
    var state = document.querySelector("#sOption");

    var selectCountry = country.value;

    state.innerHTML = '<option value="b">Select State</option>';

    if (selectCountry) {
        state.disabled = false

        var states = countryData[selectCountry];

        for (var statename in states) {
            var option = document.createElement('option');
            option.text = statename;
            option.value = statename;
            state.appendChild(option);
        }
    } else {
        state.disabled = true;
    }
}

document.querySelector("#cOption").addEventListener('change', stateData);

function districtData() {
    var state = document.querySelector("#sOption");
    var district = document.querySelector("#dOption");

    var selectState = state.value; 

    district.innerHTML = '<option value="c">Select District</option>';

    if (selectState) {
        district.disabled = false;

        var districts = countryData[document.querySelector("#cOption").value][selectState]; 

        for (var i = 0; i < districts.length; i++) {
            var option = document.createElement('option');
            option.text = districts[i];
            option.value = districts[i];
            district.appendChild(option);
        }
    } else {
        district.disabled = true;
    }
}

document.querySelector("#sOption").addEventListener('change', districtData);
