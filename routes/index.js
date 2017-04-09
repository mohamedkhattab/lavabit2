var express = require('express');
var router = express.Router();

/* TO-DO: check session */
router.get('/', function(req, res, next) {
  res.render('login', { message: "" });
});

module.exports = router;
