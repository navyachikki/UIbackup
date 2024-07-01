var countryData = {
    "India": {
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad"],
        "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
        "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
    },
    "United Kingdom": {
        "England": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
        "Scotland": ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Inverness"],
        "Wales": ["Cardiff", "Swansea", "Newport", "Bangor", "St Davids"],
        "Northern Ireland": ["Belfast", "Londonderry", "Newry", "Armagh", "Derry"],
        "Isle of Man": ["Douglas", "Peel", "Ramsey", "Castletown", "Port Erin"]
    },
    "Japan": {
        "Tokyo": ["Shinjuku", "Shibuya", "Ginza", "Ikebukuro", "Shinagawa"],
        "Osaka": ["Umeda", "Namba", "Tennoji", "Shinsaibashi", "Dotonbori"],
        "Kyoto": ["Gion", "Arashiyama", "Kinkakuji", "Fushimi Inari", "Nijo Castle"],
        "Hokkaido": ["Sapporo", "Otaru", "Hakodate", "Asahikawa", "Furano"],
        "Okinawa": ["Naha", "Nago", "Miyako-jima", "Ishigaki", "Yonaguni"]
    },
    "United States": {
        "California": ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"],
        "New York": ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
        "Texas": ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
        "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale"],
        "Illinois": ["Chicago", "Springfield", "Rockford", "Naperville", "Aurora"]
    },
    "Canada": {
        "Ontario": ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
        "Quebec": ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"],
        "British Columbia": ["Vancouver", "Surrey", "Burnaby", "Richmond", "Kelowna"],
        "Alberta": ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat"],
        "Manitoba": ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie"]
    }
};

function countryDropdown() {
    var countrySelect = document.querySelector("#coption");
    
    countrySelect.innerHTML = '<option value="">Select Country</option>';
    
   
    for (var country in countryData) {
        var option = document.createElement('option');
        option.text = country;
        option.value = country;
        countrySelect.appendChild(option);
    }
}


countryDropdown();

function stateData() {
    var country = document.querySelector("#coption");
    var state = document.querySelector("#soption");

    var selectCountry = country.value;

    state.innerHTML = '<option value="">Select State</option>';

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

document.querySelector("#coption").addEventListener('change', stateData);

function districtData() {
    var state = document.querySelector("#soption");
    var district = document.querySelector("#doption");

    var selectState = state.value; 

    district.innerHTML = '<option value="">Select District</option>';

    if (selectState) {
        district.disabled = false;

        var districts = countryData[document.querySelector("#coption").value][selectState]; 

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

document.querySelector("#soption").addEventListener('change', districtData);


user = {};

function data (){
    user.name = document.querySelector("#username").value;
    document.querySelector("#user").innerText = user.name
    user.age = document.querySelector("#userage").value;
    document.querySelector("#age").innerText = user.age
    user.country = document.querySelector("#coption").value;
    document.querySelector("#country").innerText = user.country
    user.state = document.querySelector("#soption").value;
    document.querySelector("#state").innerText = user.state
    user.district = document.querySelector("#doption").value;
    document.querySelector("#district").innerText = user.district
    
}

data();