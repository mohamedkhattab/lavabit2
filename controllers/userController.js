var User = require('../models/user');
var Inbox = require('../models/inbox');
var Sent = require('../models/sent');
var Draft = require('../models/draft');


module.exports = {
    create: function(obj) {
        console.log("i am here :D :D ");
        var newUser = new User(obj);
        var result = false;

        newUser.save(function(err) {
            console.log('new user saved successfully!');
            result = true;
        });
        return result;
    },

    //returns the user object if found and null if not found
    retrieve: function(Email, callback) {
        var result = null;
        //console.log("RETRIVE: " + Email);
        query = User.where({ email: Email });
        query.findOne(function(err, user) {
            //TO-DO: change in production
            if(err) console.error(err);
            if(user) result = user;

            return callback(result);
        });
    },

    retrieveInbox: function(id , callBack){
        var strId = id.str;
        var query = Inbox.where({id: strId});
        query.exec(function(err , inbox){
            if(err)
                return callBack(Error("Error while loading inbox :D "));
            callBack(inbox);
        });
    },

    retrieveSent: function(id , callBack){
        var strId = id.str;
        var query = Inbox.where({id: strId});
        query.exec(function(err , sent){
            if(err)
                return callBack(Error("Error while loading sent :D "));
            callBack(sent);
        });
    },

    retrieveDraft: function(id , callBack){
        var strId = id.str;
        var query = Inbox.where({id: strId});
        query.exec(function(err , draft){
            if(err)
                return callBack(Error("Error while loading draft :D "));
            callBack(draft);
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
                if (user.hasOwnProperty(attr))
					user[attr] = newVals[attr];
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
