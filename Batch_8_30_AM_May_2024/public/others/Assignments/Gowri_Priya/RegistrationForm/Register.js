var countryList=[
    {
        name:"India",
        value:"India",
    },
    {
        name:"Japan",
        value:"Japan"
    },
    // {
    //     name:"China",
    //     value:"China"
    // },
    // {
    //     name:"Ukraine",
    //     value:"Ukraine"
    // },
];
var stateList={
    India:[
        {
            name:"Andhra_Pradesh",
            value:"Andhra_Pradesh",
        },
        {
            name: "Maharastra",
            value:"Maharastra",
        },
    ],
    Japan: [
        {
            name:"Chubu",
            value:"Chubu",
        },
        {
            name:"Kanto",
            value:"Kanto",
        },
    ],
};

var districtList ={
    Andhra_Pradesh: [
        {
            name:"Hyderabad",
            value:"Hyderabad",
        },
        {
            name:"Vizag",
            value:"Vizag",
        },
    ],
    Maharastra:[
        {
            name:"Akola",
            value:"Akola",
        },
        {
            name:"Chandrapur",
            value:"Chandrapur",
        },
    ],
    Chubu:[
        {
            name:"Fukui",
            value:"Fukui",
        },
    ],
    Kanto:[
        {
            name:"Chiba",
            value:"Chiba",
        },
    ],

};

function countries(){
    document.querySelector("#name").value = "";

    document.querySelector("#age").value = "";

    document.querySelector("input[name=gender]").checked ="Male";

    document.querySelector("#country").innerHTML = '<option value = "">Select Country</option>';

    document.querySelector("#state").disabled = true;
    document.querySelector("#state").innerHTML = '<option value = "">Select State</option>';

    document.querySelector("#district").disabled = true;
    document.querySelector("#district").innerHTML = '<option value = "">Select District</option>';
    
    for(var i=0;i<countryList.length;i++){

        document.querySelector("#country").value = "";

        var optionTag = document.createElement("option");
        optionTag.setAttribute("value", countryList[i].name);
        optionTag.innerHTML = countryList[i].value;
        document.querySelector("#country").append(optionTag);
    }
}

function countrySelector(){
    var selectCountry = document.querySelector("#country").value;

    document.querySelector("#state").disabled = false;
    document.querySelector("#state").innerHTML = '<option value = "">Select State</option>';

    document.querySelector("#district").disabled = true;
    document.querySelector("#district").innerHTML = '<option value = "">Select District</option>';

    for(var country in stateList){
        if(country == selectCountry){
            for(var i=0; i<stateList[country].length; i++){
                var state = stateList[country];
                var optionTag = document.createElement("option");
                optionTag.setAttribute("value", state[i].name);
                optionTag.innerHTML = state[i].value;
                document.querySelector("#state").append(optionTag);
            }
        }
    }

}

function stateSelector(){
    var selectState = document.querySelector("#state").value;

    document.querySelector("#district").disabled = false;
    document.querySelector("#district").innerHTML = '<option value = "">Select State</option>';

    // document.querySelector("#district").disabled = true;
    // document.querySelector("#district").innerHTML = '<option value = "">Select District</option>';

    for(var state in districtList){
        if(state == selectState){
            for(var i=0; i<districtList[state].length; i++){
                var district = districtList[state];
                var optionTag = document.createElement("option");
                optionTag.setAttribute("value", district[i].name);
                optionTag.innerHTML = district[i].value;
                document.querySelector("#district").append(optionTag);
            }
        }
    }

}

// function districtSelector(){
//     var selectState = document.querySelector("#district").value;

//     document.querySelector("#district").disabled = false;
//     document.querySelector("#district").innerHTML = '<option value = "">Select State</option>';

//     // document.querySelector("#district").disabled = true;
//     // document.querySelector("#district").innerHTML = '<option value = "">Select District</option>';

//     for(var state in districtList){
//         if(state == selectState){
//             for(var i=0; i<districtList[state].length; i++){
//                 // var state = stateList[country];
//                 var optionTag = document.createElement("option");
//                 optionTag.setAttribute("value", district[i]?.name);
//                 optionTag.innerHTML = district[i]?.value;
//                 document.querySelector("#district").append(optionTag);
//             }
//         }
//     }

// }
function userData(){
    console.log("Username: " + document.querySelector("#name").value);
    console.log("Age: " + document.querySelector("#age").value);
    console.log("Gender: " + document.querySelector("input[name=gender]:checked").value);
    console.log("Country: " + document.querySelector("#country").value);
    console.log("State: " + document.querySelector("#state").value);
    console.log("District: " + document.querySelector("#district").value);
    // countries();
}

countries();
