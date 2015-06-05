module.exports = function(app, passport) {


app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/#/signup', function (req, res) {
  res.render('index.html');
});

app.get('/#/profile', function (req, res) {
  res.render('sample.html',{email: req.user});
  console.log("the mail id is" +email);
});

 // PROFILE SECTION =========================
    app.get('/#/profile', isLoggedIn, function(req, res) {
        res.render('sample.html', {
            user : req.user
        });
    });
        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/#/profile', // redirect to the secure profile section
            failureRedirect : '/#/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));


 // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/#/profile', // redirect to the secure profile section
            failureRedirect : '/#/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}