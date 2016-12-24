var userController = require('../controllers/userController');

function checkPassword(password){
    var expressions = [new RegExp("^[^A-Z]*[A-Z]+") , new RegExp("^[^a-z]*[a-z]+") , 
                    new RegExp("^.*[0-9]+") , new RegExp("^[a-zA-Z0-9]{8,}") ]; 
    var result = true;
    for(var i = 0 ; i < expressions.length; i ++)
        result &= expressions.test(password);
    return result && password != null;
}
function checkMail(email){
    var regularExp = new RegExp("^[a-zA-Z]+.*@lavabit.com");
    var result = regularExp.test(email);
    if(!result)
        return false;
    var answer = userController.retrieve(email);
    return answer != null;
}
function checkUser(obj){
    var email = obj["email"] , password = obj["password"];
    return  checkMail(email) && checkPassword(password);
}

module.exports = {
    checkPassword: checkPassword,
    checkMail: checkMail , 
    checkUser: checkUser
};