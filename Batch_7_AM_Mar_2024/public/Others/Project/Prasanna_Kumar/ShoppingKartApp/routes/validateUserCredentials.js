var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var responseObj;
    // console.log(req.body);
    
    if (req.body.accountId == "admin" && req.body.accountPassword == "Admin123") {
        responseObj = {msg: 'Valid details'};
    } else {
        responseObj = {msg: 'Invalid'};
    }
    res.send(JSON.stringify(responseObj));
    
});
module.exports = router;
