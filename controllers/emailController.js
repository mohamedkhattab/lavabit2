
var User = require('../models/user');
var Inbox = require('../models/inbox');
var Sent = require('../models/sent');
var Draft = require('../models/draft');

var userController = require('./userController');
var smtpServer = require('../lib/smtpserver');

module.exports = {
    addMail : function(emailAddress , mail , callback ){
        userController.retrieve(emailAddress , function(userTo){
            if(!userTo)   return callback(new Error("There is no such user  "));
            userController.retrieve(mail.from[0].address , function(userFrom){
                if(!userFrom)   return callback(new Error("There is no such user"));
                var _messageFrom = {
                    id : userFrom._id,
                    from: userFrom.email,
                    to: userTo.email,
                    subject: mail.subject,
                    message: mail.text,
                    starred: false
                };
                var _messageTo = {
                    id: userTo._id, 
                    from: userFrom.email,
                    to: userTo.email, 
                    subject: mail.subject,
                    message: mail.subject,
                    starred: false
                };
                Inbox.push(_messageTo);
                Sent.push(_messageFrom);
                Inbox.save();
                Sent.save();
                return callback(null);
            });            
        });
    }
};