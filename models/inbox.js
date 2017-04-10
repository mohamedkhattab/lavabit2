var mongoose = require('../lib/dbconnect');

var InboxSchema = mongoose.Schema({
    id : String , 
    from: String,
    to: String,
    subject: String,
    message: String,
    starred: Boolean
});

var inbox =  mongoose.model('Inbox' , InboxSchema);

module.exports = inbox;


