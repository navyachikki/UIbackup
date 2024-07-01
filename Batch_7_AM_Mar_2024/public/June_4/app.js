var slideImageList = [
    {
        imageUrl: 'https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/pc/i20_Modelpc.png',
        title: 'The Red Car',
        subTitle: 'The most effordable Car of the year'
    },
    {
        imageUrl: 'https://media.architecturaldigest.com/photos/60f99c2c0adf8cd1e3beca71/16:9/w_1935,h_1088,c_limit/Now%20You%20Drive%201.jpg',
        title: 'The Luxury Car',
        subTitle: 'The most Luxirous Car of the year'
    },
    {
        imageUrl: 'https://www.motownindia.com/images/Auto-Industry/LUXURY-CARS-IN-INDIA-A-Painful-Growth-Motown-India-Bureau-1-989.jpg',
        title: 'The stylish Car',
        subTitle: 'The most Stylish car of the year'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7wrb_ILsK85du3cwsCjkGA_YuT7iv4SMMA&s',
        title: 'Sports car',
        subTitle: 'The super fast sports car of th year'
    }
];


var slideImageTempalte = '';
document.addEventListener("DOMContentLoaded", () => {
    slideImageTempalte = Handlebars.compile($("#slideImageTemplate").html());

    slideImageList.forEach((item, index) => {
        if (index ==0) {
            item.activeClass = 'active';
        }
        $(".carousel-inner").append(slideImageTempalte(item));
    })
})