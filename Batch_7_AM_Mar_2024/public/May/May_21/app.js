
var productDetails = {
    data: [
        {
            name: 'Laptop',
            price: 2000
        },
        {
            name: 'mobile',
            price: 1000
        },
        {
            name: 'driver',
            price: 20000
        }
    ]
};

sessionStorage.setItem("pdetails", JSON.stringify(productDetails));


var themeName;
var applyTheme = (themeName) => {
    document.querySelector("body").style.background = themeName;
}

document.addEventListener("DOMContentLoaded", () => {

    if (sessionStorage.getItem("userSelectedTheme") != null) {
        applyTheme(sessionStorage.getItem("userSelectedTheme"));
    }

    if (sessionStorage.getItem("userPrefData") != null) {
        prefillAccountDetails();
    }

})

var getTheme = () => {
    var themeName = document.querySelector("#themeName").value;
    
    sessionStorage.setItem("userSelectedTheme", themeName);
    applyTheme(themeName)

    
}

var loginDetails = () => {
    // var userAction = confirm("do you want to save details?");
    // console.log(userAction);
    var userData = {};
    userData.accountId = document.querySelector("#userId").value;
    userData.accountPwd = document.querySelector("#acntPwd").value;

    


    if(document.querySelector("#userOption").checked) {
        sessionStorage.setItem("userPrefData", JSON.stringify(userData));
    } else {
        sessionStorage.setItem("userPrefData", null);
    }
}


var prefillAccountDetails = () => {
    var userData = sessionStorage.getItem("userPrefData");
    userData = JSON.parse(userData);
    document.querySelector("#userId").value = userData.accountId;
    document.querySelector("#acntPwd").value = userData.accountPwd;

    document.querySelector("#userOption").checked = true;
}