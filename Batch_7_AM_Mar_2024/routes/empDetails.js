var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var empDetails = {
    name: 'Raj',
    age: 20,
    gender: 'Male',
    deparment: 'IT'
  };

  res.send(JSON.stringify(empDetails));
});

module.exports = router;
