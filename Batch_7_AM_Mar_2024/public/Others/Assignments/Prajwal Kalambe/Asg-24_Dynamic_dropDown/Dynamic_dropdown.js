var countryStateCity={
    India:{
        Maharashtra:["Pune","Mumbai","Nagpur","Amravati","Goa","Nashik","Yavatmal","Chandrapur"],
        Madhya_Pradesh:["Bhojpur","Bhopal","Burhanpur","Chhatarpur","Chhindwara"],
        Punjab:["Amritsar","Batala","Chandigarh","Faridkot","Firozpur","Gurdaspur","Hoshiarpur"],
        Rajasthan:["Abu","Ajmer","Alwar","Jodhpur","Barmer","Beawar"],
        Tamil_Nadu:["Kanchipuram","Kanniyakumari","Kodaikanal","Kumbakonam","Madurai"],
        Uttar_Pradesh:["Fatehpur", "Sikri","Ghaziabad","Gonda","Bijnor","Budaun"],
        West_Bengal:["Hugli",
            "Ingraj","Jalpaiguri","Kalimpong","Kamarhati"]
    },
    USA:{
        Alabama:["Alexander City","Andalusia","Anniston","Guntersville"],
        Alaska:["Anchorage","Cordova","Fairbanks","Haines","Homer"],
        California:["Alameda","Alhambra","Anaheim","Antioch"]

    },
    Russia:{
        Abaza:["Achinsk","Alameda","Alhambra"],
        Moscow:["Chechnya", "Dagestan", "Ingushetia", "Kabardino","Balkaria"],
        Kazan:["Karachay","Cherkessia", "North Ossetia-Alania"],
        Tyumen:["Adygea", "Astrakhan", "Oblast", "Kalmykia", 
         "Krai", "Rostov"]

    },
    China:{
        Shanghai:["Nanjing","Nanchong",	"Xitiyin","Shenyang"],
        Beijing:["Dalian","Qingdao","Ningbo"],
        Guangzhou:["Shiyan","Urumqi","Dadonghai"],
        Wuhan:["Kunshan","Fushun","Baotou"],
        Zibo:["Xianyang","Benxi","Qiqihar"]

    },
    Australia:{
        Queensland:["Beaudesert","Blackwater","Bowen","Brisbane"],
        Victoria:["Ararat","Bacchus", "Marsh","Bairnsdale","Ballarat","Beechworth"],
        Western_Australia:["Broome","Bunbury","Busselton","Coolgardie"]
    }
}

window.onload=function(){
    const selectCountry=document.querySelector("#country"),
    selectState=document.querySelector("#state"),
    selectDistrict=document.querySelector("#district"),
    selects=document.querySelectorAll("select")

    selectState.disabled=true
    selectDistrict.disabled=true

    selects.forEach(select=>{
        if(select.disabled==true){
            select.style.cursor="auto";
        }
        else{
            select.style.cursor="pointer";
        }
    })
    for(let country in countryStateCity){
        selectCountry.options[selectCountry.options.length]=new Option(country,country)
    }

    //country change
    selectCountry.onchange=(e)=>{
        selectState.disabled=false;
        selectDistrict.disabled=true ;
        selectState.length=1;
        selectDistrict.length=1;

        selects.forEach(select=>{
            if(select.disabled==true){
                select.style.cursor="auto";
            }
            else{
                select.style.cursor="pointer";
            }
        })

        for(let state in countryStateCity[e.target.value]){
            selectState.options[selectState.options.length]=new Option(state,state)
        }

    }
    //state change
    selectState.onchange=(e)=>{  
        selectDistrict.disabled=false ;
        selectDistrict.length=1;
        
        selects.forEach(select=>{
            if(select.disabled==true){
                select.style.cursor="auto";
            }
            else{
                select.style.cursor="pointer";
            }
        })

        var cityVal=countryStateCity[selectCountry.value][e.target.value]
        for(let i=0;i<cityVal.length;i++){
            selectDistrict.options[selectDistrict.options.length]=new Option(cityVal[i],cityVal[i]);
        }

    }

}

function submitData(){
    var outputSlip=document.querySelector(".outputSlip");
    outputSlip.setAttribute("style","display:block");
    var name=document.querySelector("#name").value;
    var age=document.querySelector("#age").value;
    
    var country=document.querySelector("#country").value;
    var state=document.querySelector("#state").value;
    var district=document.querySelector("#district").value;
    
    
    var outname=document.querySelector("#outname");
    var outage=document.querySelector("#outage");
    var outCountry=document.querySelector("#outCountry");
    var outState=document.querySelector("#outState");
    var outDistrict=document.querySelector("#outDistrict");
    outname.innerHTML=name;
    outage.innerHTML=age;
    outCountry.innerHTML=country;
    outState.innerHTML=state;
    outDistrict.innerHTML=district;

}

