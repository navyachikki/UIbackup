let users = {};

users.countryList =[
    {
        name: "India",
        value: "India",
    },
    {
        name: "Austrelia",
        value: "Austrelia",
    },
    {
        name: "Germany",
        value: "Germany",
    }
];

for(let i = 0;i < users.countryList.length;i++){
    document.querySelector('#country').value ="";
    let optionTag = document.createElement('option');
    optionTag.setAttribute("value", users.countryList[i].name );
    optionTag.innerHTML = users.countryList[i].value;
    document.querySelector('#country').append(optionTag);
}

function readUserData(){
    document.querySelector("#userNname").value;
    document.querySelector("#userAge").value ;
    document.querySelector("input[name=gender]:checked").value;
    document.querySelector("#country").value = "";
}
