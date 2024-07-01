var location_details = {
    countries : [
        {
            name : "India",
            states : [
                {
                    name: "Maharashtra",
                    districts: [
                        "Mumbai Suburban",
                        "Pune",
                        "Nagpur"
                    ]
                },
                {
                    name: "Karnataka",
                    districts: [
                        "Bangalore Urban",
                        "Mysore",
                        "Mangalore"
                    ]
                },
                {
                    name: "Tamil Nadu",
                    districts: [
                        "Chennai",
                        "Coimbatore",
                        "Madurai"
                    ]
                }
            ]
        },
        {
            name : "United States",
            states : [
                {
                    name: "California",
                    districts: [
                        "Los Angeles County",
                        "San Diego County",
                        "San Francisco County"
                    ]
                },
                {
                    name: "Texas",
                    districts: [
                        "Harris County",
                        "Dallas County",
                        "Travis County"
                    ]
                },
                {
                    name: "New York",
                    districts: [
                        "New York County",
                        "Kings County",
                        "Queens County"
                    ]
                }
            ]
        },
        {
            name : "Australia",
            states : [
                {
                    name: "New South Wales",
                    districts: [
                        "Sydney",
                        "Newcastle",
                        "Wollongong"
                    ]
                },
                {
                    name: "Victoria",
                    districts: [
                        "Melbourne",
                        "Geelong",
                        "Ballarat"
                    ]
                },
                {
                    name: "Queensland",
                    districts: [
                        "Brisbane",
                        "Gold Coast",
                        "Sunshine Coast"
                    ]
                }
            ]
        }
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    let countryDropdown = $("#country_dropdown");
    var numberOfCounties = location_details.countries.length
    var countryOptionsExists = $("#country_dropdown>option").length > 0;
    if(!countryOptionsExists) {
        for(var i=0; i<numberOfCounties; i++) {
            var countryOption = $("<option/>");
            countryOption.val(location_details.countries[i].name)
            countryOption.text(location_details.countries[i].name)
            countryDropdown.append(countryOption)
        }
    }
    countryDropdown.prop("selectedIndex", -1)
})

var updateStates = () => {
    $("#state_dropdown>option").remove()
    $("#district_dropdown>option").remove()
    $("#state_dropdown").removeAttr("disabled")
    var numberOfCounties = location_details.countries.length
    var getSelectedCountryIndex = () => {
        var selectedCountry = $("#country_dropdown").val()
        for(var i=0; i<numberOfCounties; i++) {
            if(location_details.countries[i].name == selectedCountry) {
                return i;
            }
        }
    }

    var stateOptionsExists = $("#state_dropdown>option").length > 0
    if(!stateOptionsExists) {
        var countryIndex = getSelectedCountryIndex()
        var numberOfStates = location_details.countries[countryIndex].states.length
        for(var i=0; i<numberOfStates; i++) {
            var stateOption = $("<option/>");
            stateOption.val(location_details.countries[countryIndex].states[i].name)
            stateOption.text(location_details.countries[countryIndex].states[i].name)
            $("#state_dropdown").append(stateOption)
        }
    }
    $("#state_dropdown").prop("selectedIndex", -1)
}

var updateDistricts = () => {
    $("#district_dropdown>option").remove()
    $("#district_dropdown").removeAttr("disabled")
    var numberOfCounties = location_details.countries.length
    var getSelectedCountryIndex = () => {
        var selectedCountry = $("#country_dropdown").val()
        for(var i=0; i<numberOfCounties; i++) {
            if(location_details.countries[i].name == selectedCountry) {
                return i;
            }
        }
    }
    
    var countryIndex = getSelectedCountryIndex()
    var numberOfStates = location_details.countries[countryIndex].states.length
    var getSelectedStateIndex = () => {
        var selectedState = $("#state_dropdown").val()
        for(var i=0; i<numberOfStates; i++) {
            if(location_details.countries[countryIndex].states[i].name == selectedState) {
                return i;
            }
        }
    }

    var districtOptionsExists = $("#district_dropdown>option").length>0
    if(!districtOptionsExists) {
        var stateIndex = getSelectedStateIndex()
        var numberOfDistricts = location_details.countries[countryIndex].states[stateIndex].districts.length
        for(var i=0; i<numberOfDistricts; i++) {
            var districtOption = $("<option/>");
            districtOption.val(location_details.countries[countryIndex].states[stateIndex].districts[i])
            districtOption.text(location_details.countries[countryIndex].states[stateIndex].districts[i])
            $("#district_dropdown").append(districtOption)
        }
    }
    $("#district_dropdown").prop("selectedIndex", -1)
}