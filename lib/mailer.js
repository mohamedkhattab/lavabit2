var nodemailer = require('nodemailer');

function connect(email, password , callback) {
    console.log("CONNECT FUNC: " + email + " " + password)
    var smtpConfig = {
        host: '127.0.0.1',
        port: 2525,
        secure: false, // Don't use SSL
        auth: {
            user: email,
            pass: password
        }
    };

    var transporter = nodemailer.createTransport(smtpConfig);

    transporter.verify(function(error, success) {
    if (error) {
            console.log(error);
            return callback(error, transporter);
    } else {
            console.log('Server is ready to take our messages');
            console.log("change");
            return callback(null, transporter);
    }
    });
}

module.exports = {
    send: function(email, password, message, callback) {
        connect(email, password , function(error, transporter) {
            if(error) return callback(error);
            var mailOptions = {}; // from, to, subject, text, html

            for (var attr in message) {
                if (message.hasOwnProperty(attr)) mailOptions[attr] = message[attr];
            }

            // send mail with defined transport object
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return callback(error);
                }
                
                console.log('Message sent: ' + info.response);
                return callback(null);
            });
        });
        
    }
};