var mongoose = require('../lib/dbconnect');

var SentSchema = mongoose.Schema({
    id : String , 
    from: String,
    to: String,
    subject: String,
    message: String,
    starred: Boolean
});

var sent =  mongoose.model('Sent' , SentSchema);

module.exports = sent;


