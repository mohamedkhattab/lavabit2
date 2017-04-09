var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    hashPassword: function(password, callback) {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            console.error(err);
            return callback(hash);
        });
    },

    checkPassword: function(password, hash, callback) { 
        bcrypt.compare(password, hash, function(err, res) {
            var result = false;
            if(!err) result = true;
            return callback(result); 
        });
    }
};