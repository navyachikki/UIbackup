var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify({msg:'Successfully Validated'}));
  axios.get('/validate/userCredentials');
});

module.exports = router;
