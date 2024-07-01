
    let mypromise = new Promise((resolve, reject) => {
        var age = 10;
        if (age >= 21) {
            setTimeout(() => {
                resolve();
            }, 4000)
            
        } else {
            setTimeout(() => {
                reject();
            }, 5000)
            
        }
    });

    async function dojob() {
        console.log("Started Account close");
        await mypromise.then(() => {
            console.log("Its a valid age")
        }).catch(() => {
            console.log("Its a Invalid age")
        });
        console.log("End do the settelment")
    }
    
    dojob(); 

