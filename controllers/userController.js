var user = require('../models/user');

module.exports = {
    create: function(obj) {
        var newUser = new user(obj);
        newUser.save(function(err) {
            console.log('new user saved successfully!');
        });
    }
}