var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  req.session.destroy();

  res.send(JSON.stringify({msg: 'Done'}))
});

module.exports = router;
