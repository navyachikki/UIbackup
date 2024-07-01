var themeName;

document.addEventListener("DOMContentLoaded",() => {
    if (localStorage.getItem("userSelectedTheme") != null) {
        applyTheme(localStorage.getItem("userSelectedTheme"));
    }

    if (localStorage.getItem("userStoredData") != null) {
        loadUserData();
    }
})

var getTheme = () => {
    var themeName = document.querySelector("#themeName").value;
    localStorage.setItem("userSelectedTheme",themeName);
    applyTheme(themeName);
}

var applyTheme = (themeName) => {
    document.querySelector("body").style.background = themeName;
}

var storeloginDtls = () => {
    var userdata = {};
    userdata.accountid = document.querySelector("#userId").value;  
    userdata.accountPass = document.querySelector("#userPass").value;

    if(document.querySelector("#checkBoxValue").checked) {
        localStorage.setItem("userStoredData",JSON.stringify(userdata));
    } else {
        localStorage.setItem("userStoredData",null);
    }
}

var loadUserData = () => {
    var userStoreDt = localStorage.getItem("userStoredData");
    userStoreDt = JSON.parse(userStoreDt);
    document.querySelector("#userId").value = userStoreDt.accountid;
    document.querySelector("#userPass").value = userStoreDt.accountPass;
    document.querySelector("#checkBoxValue").checked = true;
}