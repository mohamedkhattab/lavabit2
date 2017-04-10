var userController = require('../controllers/userController');

function checkPassword(password){
    var expression = new RegExp("^(?=.*[^a-zA-Z0-9]+)(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]).{8,}");
    var result = expression.test(password);
    return result && password != null;
}
function checkMail(email){
    var regularExp = new RegExp("^[a-zA-Z]+.*@magmabit.com");
    var result = regularExp.test(email);
    if(!result)
        return false;
    return true;
}
function checkUser(obj, callback){
    var email = obj["email"] , password = obj["password"];
    var result = checkMail(email) && checkPassword(password);
    console.log(email + " -- " + password);
    console.log(checkMail(email) + " " + checkPassword(password));
    return  callback( result );
}

module.exports = {
    checkPassword: checkPassword,
    checkMail: checkMail , 
    checkUser: checkUser
};