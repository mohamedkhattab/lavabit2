var mongoose = require('../lib/dbconnect');

var emailStructure = {
  from: String,
  to: String,
  subject: String,
  message: String,
  starred: Boolean
};

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    inbox: [emailStructure],
    draft: [emailStructure]
});

var user = mongoose.model('User', userSchema);

module.exports = user;