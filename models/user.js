var mongoose = require('../lib/dbconnect');

// TODO: restructure schema
var userSchema = mongoose.Schema({
    fullName : String ,
    email: String,
    password: String
});

var user = mongoose.model('User', userSchema);

module.exports = user;

