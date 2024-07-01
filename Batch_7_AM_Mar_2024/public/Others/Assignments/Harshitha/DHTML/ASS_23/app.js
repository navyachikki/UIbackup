const stateOptions = {
    USA: ['California', 'Texas', 'New York'],
    India: ['Maharashtra', 'Gujarat', 'Delhi']
};

const districtOptions = {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Texas: ['Houston', 'Dallas', 'Austin'],
    NewYork: ['New York City', 'Buffalo', 'Rochester'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
    Delhi: ['Central Delhi', 'South Delhi', 'North Delhi']
};

function updateStates() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const selectedCountry = countrySelect.value;

    // Clear previous state and district options
    stateSelect.innerHTML = '<option value="">Select a state</option>';
    districtSelect.innerHTML = '<option value="">Select a district</option>';
    districtSelect.disabled = true;

    if (selectedCountry) {
        // Enable the state dropdown
        stateSelect.disabled = false;

        // Populate state dropdown based on selected country
        stateOptions[selectedCountry].forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    } else {
        // Disable the state and district dropdowns if no country is selected
        stateSelect.disabled = true;
        districtSelect.disabled = true;
    }
}

function updateDistricts() {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const selectedState = stateSelect.value;

    // Clear previous district options
    districtSelect.innerHTML = '<option value="">Select a district</option>';

    if (selectedState) {
        // Enable the district dropdown
        districtSelect.disabled = false;

        // Populate district dropdown based on selected state
        districtOptions[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    } else {
        // Disable the district dropdown if no state is selected
        districtSelect.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('country').addEventListener('change', updateStates);
    document.getElementById('state').addEventListener('change', updateDistricts);

    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var country = document.getElementById('country').value;
        var state = document.getElementById('state').value;
        var district = document.getElementById('district').value;

        var result = `
            <strong>Name:</strong> ${name}<br>
            <strong>Age:</strong> ${age}<br>
            <strong>Country:</strong> ${country}<br>
            <strong>State:</strong> ${state}<br>
            <strong>District:</strong> ${district}
        `;

        document.getElementById('result').innerHTML = result;
    });
});
