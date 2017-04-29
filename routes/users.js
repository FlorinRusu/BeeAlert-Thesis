var express = require('express');
var router = express.Router();


var User = require('../models/user');

/* Register */
router.get('/register', function(req, res) {
  res.render('register');
});

//Login view
router.get('/login',function(req,res){
  res.render('login');
});

router.post('/register',function(req,res){
     var name = req.body.name;
     var email = req.body.email;
     var username = req.body.username;
     var password = req.body.password;
     var password2 = req.body.password2;


    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    if(errors){
       res.render('register',{
           errors:errors
       })
    }
    else{
            var newUser = new User({
                name:name,
                email:email,
                username:username,
                password:password
            });

        User.createUser(newUser,function(err,user){
           if(err) throw err;
            console.log(user);
        });

        req.flash('success_msg','Your are registered and now can login');
        res.redirect('/users/login');
    }

});

/*Login functionality*/

app.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });

module.exports = router;
