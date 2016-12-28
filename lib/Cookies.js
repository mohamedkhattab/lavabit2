
module.exports = {
    checkCookies : function(req , callback){
        console.log(req.cookies + " <<<<<<< \n");
        if(req.cookies)
            return callback(null);
        return callback(new Error("No Cookies have been found "));
    }
};