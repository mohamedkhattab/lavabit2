var nodemailer = require('nodemailer');

var smtpConfig = 'smtps://taherelsonny@gmail.com:PassPass123_@smtp.gmail.com';
var transporter = nodemailer.createTransport(smtpConfig);

transporter.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
        console.log("change");
   }
});

module.exports = {
    send: function(email, password, message) {
        var mailOptions = {}; // from, to, subject, text, html

        for (var attr in message) {
            if (message.hasOwnProperty(attr)) mailOptions[attr] = message[attr];
        }

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
};