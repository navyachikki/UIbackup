const fs = require('fs');

fs.readFile('womens.json','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    //converting data
    const items = JSON.parse(data);

    //Iterate over  data
    items.forEach(item => {
        console.log(`ID: ${item.id}`);
        console.log(`Title: ${item.title}`);
        console.log(`Price: ${item.price}`);
        console.log(`Discount Percent: ${item.discountPercent}`);
        console.log(`Description: ${item.description}`);
        console.log(`Main Image: ${item.mainImage}`);
        console.log(`Image List: ${item.imageList.join(', ')}`);
        console.log(`Rating: ${item.rating}`);
        console.log(`Details: ${JSON.stringify(item.details)}`);
        console.log(`Category: ${item.category}`);
        console.log(`Is Limited Deal: ${item.isLimitedDeal}`);
        console.log("\n");
    });
})

