var http = require("http");
var fs = require("fs");

var myserver = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type':'text/plain'
    });

    
    /*fs.readFile("sample.txt", (error, fileData) => {
        if (error) {
            response.end("error while reading file");
        } else {
            
            response.end(fileData);
        }
    }); */ 

   /* fs.writeFile("abc.txt", "Good morning every one...", (error) => {
        response.end("its been written");
    }); */
    fs.appendFile("abc.txt", "Good morning every one...", (error) => {
        response.end("its been written");
    });

   console.log("working on fs operations");
});

myserver.listen(8081, () => {
    console.log("Server is listing at 8081");
});