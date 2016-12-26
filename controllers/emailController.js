
var User = require('../models/user');
var userController = require('./userController');

module.exports = {
    addMail : function(emailAddress , mail , callback ){
        userController.retrieve(emailAddress , function(user){
            if(!user)   return callback(new Error("There is no such user  "));
            user.inbox.push(mail);
            user.save();
            return callback(null);
        });
    }
};