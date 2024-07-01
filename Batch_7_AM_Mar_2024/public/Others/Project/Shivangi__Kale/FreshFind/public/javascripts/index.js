var loadSelectedPage = (pageType) => {
    var templateUrl='';
    switch(pageType)
    {
        case 'homepage':
            templateUrl='templates/homepage.htm';
            break;
        case 'productDetails':
            templateUrl='templates/productDetailsTemplate.htm';
            break;    
    }
    axios.get(templateUrl).then((templateResponse) => {
        console.log(templateResponse);
        $("main").html(templateResponse.data);
    })
}

document.addEventListener("DOMContentLoaded",() =>{
    loadSelectedPage('homepage');
})


