var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var parser = require('rss-parser');
var xml = require('xml');

var User = require('../models/user');

/* Register */
router.get('/register', function(req, res) {
  res.render('register');
});


/*    Try RSS FEEDS */
router.get('/feeds', function(req, res, data) {
    parser.parseURL('http://www.emsc-csem.org/service/rss/rss.php?filter=yes&min_mag=3.5&region=ROMANIA&min_intens=0&max_intens=8', function(err, parsed) {
        res.json(parsed.feed.entries);
    });
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

/* Login validation*/
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username,function(err,user){
            if(err)throw err;
            if(!user){
                return done(null,false,{message:'Unknown User'});
            }

            User.comparePassword(password, user.password,function(err,isMatch){
                    if(err)throw err;
                if(isMatch){
                    return done(null,user);  //if is match
                }else {
                    return done(null,false,{message:'Invalid password'});
                }
            })
        });

    }));

/*Cryptare și decriptare, verificare parolă*/
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

/*Login functionality*/
router.post('/login',
    passport.authenticate('local',{successRedirect:'/',failureRedirect:'/users/login',failureFlash:true}),
    function(req, res) {
         res.redirect('/');

    });


router.get('/logout',function (req,res){
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('login');
});


module.exports = router;
