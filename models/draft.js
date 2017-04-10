var mongoose = require('../lib/dbconnect');

var DraftSchema = mongoose.Schema({
    id : String , 
    from: String,
    to: String,
    subject: String,
    message: String,
    starred: Boolean
});

var draft =  mongoose.model('Draft' , DraftSchema);

module.exports = draft;


