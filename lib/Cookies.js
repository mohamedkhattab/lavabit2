
module.exports = {
    checkCookies : function(req , callback){
        console.log(req.cookies["123"] + " <<<<<<< \n");
        if(req.cookies)
            return callback(null);
        return callback(new Error("No Cookies have been found "));
    }
};