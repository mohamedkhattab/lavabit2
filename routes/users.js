var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {
  userController.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    inbox: [],
    draft: []
  });
  res.json({
    success: true
  });   
                             
});

module.exports = router;
