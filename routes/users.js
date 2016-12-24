var express = require('express');
var router = express.Router();
var verify = require('../lib/verify');
var userController = require('../controllers/userController');
var hash = require('../lib/hash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {  
  console.log(req.body);
  hash.hashPassword(req.body.password, function(hash) {
    console.log("Hashed pass: " + hash);
    userController.retrieve(req.body.email, function(user) {
        console.log("USER: " + user);
        var result = verify.checkUser(req.body, function() {
          return user == null;
        });
        console.log("Result: " + result);
        if(!result){
          res.json({
            success: false
          });
        } else {
          userController.create({
            email: req.body.email,
            password: hash,
            inbox: [],
            draft: []
          });
          res.json({
            success: true
          }); 
        } 
    });
  });  
});

router.post('/login', function(req, res, next) {
  //TO-DO: check username  and password using verify lib
  userController.retrieve(req.body.email, function(user) {
    if(user) {
      hash.checkPassword(req.body.password, user.password, function(matches) {
          if(matches) res.redirect('/user/' + user._id);    
          else res.json({ message: "Username or Password Incorrect 1!" });
      });
    } else {
      res.json({ message: "Username or Password Incorrect 2!" });
    }
  });
});

module.exports = router;
