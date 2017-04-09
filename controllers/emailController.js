
var User = require('../models/user');
var userController = require('./userController');


module.exports = {
    addMail : function(emailAddress , mail , callback ){

        userController.retrieve(emailAddress , function(userTo){
            
            if(!userTo)   return callback(new Error("There is no such user  "));
            userController.retrieve(mail.from[0].address , function(userFrom){
                if(!userFrom)   return callback(new Error("There is no such user"));
                var _message = {
                    from: userFrom.email,
                    to: userTo.email,
                    subject: mail.subject,
                    message: mail.text,
                    starred: false
                };
                userFrom.sent.push(_message);
                userTo.inbox.push(_message);
                userFrom.save();
                userTo.save();
                return callback(null);
            });            
        });
    }
};