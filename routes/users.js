var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next) {
  userController.create({
    username: "amr",
    email: "hello@hhh.com",
    password: "why you do this",
    inbox: [{from: "hbjybuyb", to : "uihuhhn" , subject: "iuhhuniuuu", message: "ionjinoi",starred: true }] ,
    draft: [{from: "hbjybuyb", to : "uihuhhn" , subject: "iuhhuniuuu", message: "ionjinoi",starred: true }]
  });
  res.send("YES YES YES");   
                             
});

module.exports = router;
