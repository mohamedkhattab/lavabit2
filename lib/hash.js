var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    hashPassword: function(password) {
        bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
            return hash; 
        });
    },

    checkPassword: function(password, hash) { 
        bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
            var result = false;
            if(!err) result = true;
            return result; 
        });
    }
};