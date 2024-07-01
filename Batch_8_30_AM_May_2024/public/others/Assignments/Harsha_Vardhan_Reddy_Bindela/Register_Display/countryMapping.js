var countryDropdown = document.getElementById('countryDropdown');
    var stateDropdown = document.getElementById('stateDropdown');
    var districtDropdown = document.getElementById('districtDropdown');

    countriesList.forEach(function(country) {
        var option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        countryDropdown.appendChild(option);
    });

    function updateStates() {
        var selectedCountryCode = countryDropdown.value;
        var selectedCountry = countriesList.find(function(country) {
            return country.code === selectedCountryCode;
        });

        stateDropdown.innerHTML = '<option value="">Select</option>';

        if (selectedCountry) {
            selectedCountry.states.forEach(function(state) {
                var option = document.createElement('option');
                option.value = state.name;
                option.textContent = state.name;
                stateDropdown.appendChild(option);
            });
        }
    }

    function updateDistricts() {
      var selectedStateName = stateDropdown.value;

      let selectedCountry = countriesList.find(function(country) {
        return country.states.some(function(state) {
          return state.name === selectedStateName;
        });
      });


      districtDropdown.innerHTML = '<option value="">Select</option>';

      if (selectedCountry) {
        let selectedState = selectedCountry.states.find(function(state) {
          return state.name === selectedStateName;
        });

        if (selectedState) {
          selectedState.districts.forEach(function(district) {
            var option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
          });
        }
      }
    }