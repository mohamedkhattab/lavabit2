var express = require('express');
var router = express.Router();
var mailer = require('../lib/mailer');
var userController = require('../controllers/userController');

router.get('/:id', function(req, res, next) {
    res.render('home', { id: req.params.id });
});

router.post('/send/:id', function(req, res, next) {
    userController.retrieveById(req.params.id, function(user) {
        if(!user) res.json({ success: false, message: "Username or Password Incorrect!" });
        mailer.send(user.email, user.password, {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text
        }, function(err) {
            if(err) res.json({ success: false, message: err });
            else res.json({ success: true });
        });
    });
});



module.exports = router;