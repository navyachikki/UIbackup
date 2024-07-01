var http = require("http"); // http is a predefined node module


var myServer = http.createServer((request, response) => {
    // response.writeHead(statuscode, dataobj );
    var data = {
        username: 'Raj',
        age: 20
    }
    
    response.writeHead(200,{
            'Content-Type':'text/json'
        });
    response.end(JSON.stringify(data));

});

myServer.listen(8081, () => {
    console.log("server started listing at 8081");
});
