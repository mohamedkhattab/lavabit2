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
  //console.log(req.body);
  hash.hashPassword(req.body.password, function(hash) {
    //console.log("Hashed pass: " + hash);
    userController.retrieve(req.body.email, function(user) {
        //console.log("USER: " + user);
        verify.checkUser(req.body, function(result) {
            //console.log("Result: " + result);
            if(!result || user){
                console.log("error baby :D :D " + req.body.password + " " + req.body.confirm);
                res.render('signup' , {message : "your username or password is Incorrect"});
            } else {
                userController.create({
                  email: req.body.email,
                  password: hash,
                  inbox: [],
                  draft: []
                });
                res.redirect('/'); 
            } 
        });
    });
  });  
});

  router.get('/login', function(req, res, next) {
    res.render('login', {});
  });

  router.get('/signup', function(req, res, next) {
    res.render('signup', {});
  });

router.post('/login', function(req, res, next) {
  //TO-DO: check username  and password using verify lib
  userController.retrieve(req.body.email, function(user) {
    if(user) {
      hash.checkPassword(req.body.password, user.password, function(matches) {
          if(matches){
             req.session.user = user;
             if(req.body.remember){
               res.clearCookie("123");
               console.log("HERE - > " + req.cookies);
               res.cookie("123" , "123");
               console.log("YES baby YES");
               console.log(req.cookies["123"]);
               console.log(req.cookies);
               res.redirect('/user/' + user._id);
             }
            else 
             res.redirect('/user/' + user._id);
          }
          else res.render('login', { message: "Username or Password Incorrect!" });
      });
    } else {
      res.render('login', { message: "Username or Password Incorrect!" });
    }
  });
});

//TO-DO: update
router.post('/remove', function(req, res, next) {
  userController.delete("fedora2@lavabit.com", null, true, function(err) {
    res.json({ success: err });
  });
});

module.exports = router;
