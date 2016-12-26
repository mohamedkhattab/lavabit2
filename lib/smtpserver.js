var SMTPServer = require('smtp-server').SMTPServer;
var userController = require('../controllers/userController');
var hash = require('./hash');
var emailController = require('../controllers/emailController');
var MailParser = require('mailParser');
var mailParser = new MailParser();


var server = new SMTPServer({
    secure: false,
    allowInsecureAuth: true,
    onAuth: function(auth, session, callback) {
        userController.retrieve(auth.username, function(user) {
            console.log(auth);
            console.log(user);
            if(!user) {
                return callback(new Error('Invalid username or password 1'));
            }

            hash.checkPassword(auth.password, user.password, function(match) {
                if(match) return callback(null, { user: user._id} , null);
                else return callback(new Error('Invalid username or password 2') , null);
            });
        });
    },

    onData: function(stream, session, callback) {
        
        mailparser.on('end', function(mail){
            emailController.addMail(mail.from , mail , function(err){
                if(err)return callback(new Error("error in adding new mail"));
                return callback(null);
            } )
        });

        stream.pipe(mailParser); // print message to console 
        stream.on('end', callback);
    }

});

server.on('error', function(err){
    console.log('Error %s', err.message);
});

module.exports = server;

