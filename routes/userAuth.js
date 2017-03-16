var User = require('../models/user');

module.exports = function(app, passport) {

  app.post('/api/login', function(req, res, next) {
    console.log('TRYING TO FIND API/LOGIN')
    passport.authenticate('local-login', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json(info); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log(user, "LOGGING IN SUCCESS")
        return res.json(user);
      });
    })(req, res, next);
  });

  app.post('/api/signup', function(req, res, next) {
    console.log("FOUND SIGNUP ROUTE")
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) {
        console.log(err, "IN FIRST ERR");
        return next(err);
      } else {
        if(!user){
          console.log("Email already taken error");
          res.json({message: "That email is already taken"})
        } else {
          user.save(function(e) {
            if(e){
              console.log("inside the throw error");
              throw e;
            }
            console.log(user, "SUCCESS WITH SIGN UP");
            res.json(user);
          })
        }
      }

    })(req, res, next);
  });
}
