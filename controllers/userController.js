var User = require('../models/user');

module.exports = {
    create: function(obj) {
        var newUser = new User(obj);
        var result = false;
        newUser.save(function(err) {
            console.log('new user saved successfully!');
            result = true;
        });

        return result;
    },

    //returns the user object if found and null if not found
    retrieve: function(email, callback) {
        var result = null;
        console.log("RETRIVE: " + email);
        query = User.where({ email: email });
        query.findOne(function(err, user) {
            //TO-DO: change in production
            if(err) console.error(err);
            if(user) result = user;

            return callback(result);
        });
    },

    retrieveById: function(id, callback) {
        User.findById(id, function (err, user) {
            if(err) console.error(err);
            return callback(user);
        });
    },

    update: function(email, newVals) {
        this.retrieve(email, function(user) {
            for (var attr in newVals) {
                if (obj.hasOwnProperty(attr)) user[attr] = newVals[attr];
            }
        
        });
    },

    delete: function(email, vals, drop, callback) {
        if(drop) {
            this.retrieve(email, function(user) {
                if(user) {
                    user.remove(function() {
                        return callback(true);
                    });
                }

                return callback(false);
            });
        }
    }
}