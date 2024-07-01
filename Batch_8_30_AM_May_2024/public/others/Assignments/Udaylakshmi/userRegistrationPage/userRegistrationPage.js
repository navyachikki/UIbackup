var countryList = [
  {
    name: "India",
    value: "India",
  },
  {
    name: "Switzerland",
    value: "Switzerland",
  },
];
var stateList = {
  India: [
    {
      name: "Andhra_Pradesh",
      value: "Andhra Pradesh",
    },
    {
      name: "Bihar",
      value: "Bihar",
    },
  ],
  Switzerland: [
    {
      name: "Aargau",
      value: "Aargau",
    },
    {
      name: "Bern",
      value: "Bern",
    },
  ],
};
var districtList = {
  Andhra_Pradesh: [
    {
      name: "Guntur",
      value: "Guntur",
    },
    {
      name: "Palnadu",
      value: "Palnadu",
    },
  ],
  Bihar: [
    {
      name: "Arwal",
      value: "Arwal",
    },
    {
      name: "Banka",
      value: "Banka",
    },
  ],
  Aargau: [
    {
      name: "Vaud",
      value: "Vaud",
    },
  ],
  Bern: [
    {
      name: "Biel",
      value: "Biel",
    },
  ],
};
function CountriesList() {
  document.querySelector("#uname").value = '';
  document.querySelector("#uage").value = '';
  document.querySelector("input[name=gender]").checked = 'Male';
  document.querySelector("#country").innerHTML = '<option value="">Select Country</option>';
  document.querySelector("#state").disabled = true;
  document.querySelector("#state").innerHTML = '<option value="">Select State</option>';
  document.querySelector("#district").disabled = true;
  document.querySelector("#district").innerHTML = '<option value="">Select District</option>';
  for (var i = 0; i < countryList.length; i++) {
    document.querySelector("#country").value = "";
    var optionTag = document.createElement("option");
    optionTag.setAttribute("value", countryList[i]?.name);
    optionTag.innerHTML = countryList[i]?.value;
    document.querySelector("#country").append(optionTag);
  }
}
function CountrySelected() {
  var selectedCountry = document.querySelector("#country").value;
  document.querySelector("#state").disabled = false;
  document.querySelector("#state").innerHTML = '<option value="">Select State</option>';
  document.querySelector("#district").disabled = true;
  document.querySelector("#district").innerHTML = '<option value="">Select District</option>';
  for (var country in stateList) {
    if (country == selectedCountry) {
      for (var i = 0; i < stateList[country].length; i++) {
        var state = stateList[country];
        var optionTag = document.createElement("option");
        optionTag.setAttribute("value", state[i]?.name);
        optionTag.innerHTML = state[i]?.value;
        document.querySelector("#state").append(optionTag);
      }
    }
  }
}
function stateSelected() {
  var selectedState = document.querySelector("#state").value;
  document.querySelector("#district").disabled = false;
  document.querySelector("#district").innerHTML = '<option value="">Select District</option>';
  for (var state in districtList) {
    if (state == selectedState) {
      for (var i = 0; i < districtList[state].length; i++) {
        var district = districtList[state];
        var optionTag = document.createElement("option");
        optionTag.setAttribute("value", district[i]?.name);
        optionTag.innerHTML = district[i]?.value;
        document.querySelector("#district").append(optionTag);
      }
    }
  }
}

function readUserData() {
  console.log("Username: " + document.querySelector("#uname").value);
  console.log("Age: " + document.querySelector("#uage").value);
  console.log(
    "Gender: " + document.querySelector("input[name=gender]:checked").value
  );
  console.log("Country: " + document.querySelector("#country").value);
  console.log("State: " + document.querySelector("#state").value);
  console.log("District: " + document.querySelector("#district").value);
  CountriesList();
}

CountriesList();