
var User = require('../models/user');
var userController = require('./userController');
var emailStructure = {
  from: String,
  to: String,
  subject: String,
  message: String,
  starred: Boolean
};

module.exports = {
    addMail : function(emailAddress , mail , callback ){
        //console.log(" ---> " + emailAddress);
        userController.retrieve(emailAddress , function(userTo){
            //console.log(user + " :D :D ");
            if(!userTo)   return callback(new Error("There is no such user  "));
            userController.retrieve(mail.from[0].address , function(userFrom){
                if(!userFrom)   return callback(new Error("There is no such user  "));
                var _message = {
                    from: userFrom,
                    to: userTo,
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