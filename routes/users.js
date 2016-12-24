var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
var hash = require('../lib/hash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {  
  userController.create({
    email: req.body.email,
    password: hash.hashPassword(req.body.password),
    inbox: [],
    draft: []
  });
  res.json({
    success: true
  });   
});

router.post('/login', function(req, res, next) {
  //TO-DO: check username  and password using verify lib
  var user = userController.retrieve(req.body.email);
  if(user) {
    var passwordMatches = hash.checkPassword(req.body.password, user.password);
    if(passwordMatches) res.redirect('/inbox');    
  } else {
    res.json({ message: "Username or Password Incorrect!" });
  }
});

module.exports = router;
