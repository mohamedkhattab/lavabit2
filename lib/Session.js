var session = require("express-session");

module.exports = {
    checkSession : function(req , callback){
        if(!req.session.user)
            return callback(new Error("There is no Session :D "));
        return callback(null);
    }
};