var passport = require("passport");
var localStrategy = require("passport-local").Strategy;
/*
function validPassword(passwordClear, PasswordHash) {

}

passport.use(new localStrategy(
    function(username, password, done) {
        dbconnect.query("select username from user where username = ?", [username],
            function(err, results, fields) {
                if(err) {
                    console.error(err);
                    return done(err);
                }

                if(!results[0].username) {
                    return done(null, false, { message: "Incorrect username or password!" });
                }

                if(!validPassword(password, rows[0].password)) {
                    return done(null, false, { message: "Incorrect username or password!" });
                }

                return done(null, results[0]);
            }
        );
    }
));
*/