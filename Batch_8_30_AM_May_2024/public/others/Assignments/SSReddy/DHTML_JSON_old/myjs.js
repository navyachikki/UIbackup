var countrySelect = document.querySelector('#country3') , stateSelect = document.querySelector('#state') ,   citySelect = document.querySelector('#city')
var btnSelect = document.querySelector('#btn1') 
var dataview=document.querySelector('#dview1')

var cnCode,stCode,cityCode,city2
var data= {"country":[{"name":"India","iso2":"IN"},{"name":"China","iso2":"CN"} ]}
var stList= {"IN":[{"name":"Telengana","iso2":"TG"},{"name":"Andhrapradesh","iso2":"AP"} ],"CN":[{"name":"STATE1","iso2":"ST1"},{"name":"STATE2","iso2":"ST2"} ]}
var cityList= {"IN":[{"TG":[{"name":"Hyderabad","iso2":"HYD"},{"name":"Nalgonda","iso2":"NLG"}]},{"AP":[{"name":"Vijayawada","iso2":"VJA"},{"name":"KADAPA","iso2":"KDP"}]}],
                "CN":[{"ST1":[{"name":"CITY1","iso2":"CT1"},{"name":"CITY2","iso2":"CT2"}]},{"ST2":[{"name":"CIT3","iso2":"CT3"},{"name":"CITY4","iso2":"CT4"}]}]}
var userdata={}
/*var cnlist=[{"name":"India","iso2":"IN"},{"name":"China","iso2":"CN"} ]

   for (var key1 in cnlist){
        console.log( cnlist[key1].iso2 +"0=>"+cnlist[key1].name)
    }*/

function loadCountries() {  
    stateSelect.disabled = true
    citySelect.disabled = true
    btnSelect.disabled = true
    countrySelect.innerHTML = '<option value="">Select Country</option>'
     stateSelect.innerHTML = '<option value="">Select State</option>' 
    citySelect.innerHTML = '<option value="">Select City</option>'

    for (var key in data.country) {
       
            console.log( data.country[key].iso2 +"=>"+data.country[key].name)
            var option = document.createElement('option')
            option.value = data.country[key].iso2
            option.textContent = data.country[key].name
            countrySelect.appendChild(option)
        }       
    }

function selstate() { 
    cnCode = countrySelect.value
    stateSelect.disabled = false
    citySelect.disabled = true   
    btnSelect.disabled = true 
    console.log(cnCode);
    stateSelect.innerHTML = '<option value="">Select State</option>' 
    citySelect.innerHTML = '<option value="">Select City</option>'

    for (var key2 in stList[cnCode]) {
        
            console.log( stList[cnCode][key2].iso2 +"=>"+stList[cnCode][key2].name)
            var option2 = document.createElement('option')
            option2.value = stList[cnCode][key2].iso2
            option2.textContent = stList[cnCode][key2].name
            stateSelect.appendChild(option2)
        }       
    }

function selcity() {  
    stCode= stateSelect.value
    citySelect.disabled = false 
    btnSelect.disabled = true
    citySelect.innerHTML = '<option value="">Select City</option>'
    console.log(cityList[cnCode][0])
    for (var key3 in cityList[cnCode]) {
            console.log("key3 :"+key3)

            if (stCode in cityList[cnCode][key3]){
                city2=cityList[cnCode][key3][stCode]
                for (var key4 in city2) {

                
                    console.log( city2[key4].iso2 +"=>"+city2[key4].name)                         
                    var option3 = document.createElement('option')
                    option3.value = city2[key4].iso2
                    option3.textContent = city2[key4].name
                    citySelect.appendChild(option3)
        }   }    
    }
}

function regen(){
    btnSelect.disabled = false

}
function regibtn() { 
    userdata.cityCode =citySelect.value
    userdata.UserName= document.querySelector('#uname').value
    userdata.Gender= document.querySelector('input[name="ugen"]:checked').value 
    userdata.StateCode=stCode
    userdata.countryCode=cnCode
    userdata.age= document.querySelector('#uage').value

    var datavw = document.createElement('P')
    datavw.textContent = JSON.stringify(userdata)
    dataview.appendChild(datavw)

    console.log(userdata)
    loadCountries();
    document.querySelector('#uname').value="";
   document.querySelector('input[name="ugen"]:checked').value ="";
   document.querySelector('#uage').value="";

 }

      

    window.onload = loadCountries;