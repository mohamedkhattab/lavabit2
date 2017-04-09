var mongoose = require('../lib/dbconnect');

var emailStructure = {
  from: String,
  to: String,
  subject: String,
  message: String,
  starred: Boolean
};

// TODO: restructure schema
var userSchema = mongoose.Schema({
    email: String,
    password: String,
    inbox: [emailStructure],
    draft: [emailStructure],
    sent: [emailStructure]
});

var user = mongoose.model('User', userSchema);

module.exports = user;

