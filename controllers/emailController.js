
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
        userController.retrieve(emailAddress , function(user){
            //console.log(user + " :D :D ");
            if(!user)   return callback(new Error("There is no such user  "));
            var _message = {
                from: mail.from[0].address,
                to: mail.to[0].address,
                subject: mail.subject,
                message: mail.text,
                starred: false
            };
            user.inbox.push(_message);
            user.save();
            return callback(null);
        });
    }
};