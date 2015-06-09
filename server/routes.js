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
    app.get('/api/profile', isLoggedIn, function(req, res) {
        res.json( req.user);
    });
        // process the signup form

        app.post('/signup', function(req, res, next){
        	passport.authenticate('local-signup', function(err, user, info){
        		if(err){
        			res.redirect('/#/signup');
        		}
        		else{
        			res.send({
        				message: 'successful signup'
        			});
        		}
        	})(req, res, next);
        });





        // app.post('/signup', passport.authenticate('local-signup', {
        //     successRedirect : '/#/profile', // redirect to the secure profile section
        //     failureRedirect : '/#/signup', // redirect back to the signup page if there is an error
        //     failureFlash : true // allow flash messages
        // }));


 // process the login form


 		app.post('/login', function(req, res, next){
 			passport.authenticate('local-login', function(err, user, info){
 				if(err){
 					return next(err);
 				}
 				if(!user){
 					res.send({
 						message:'no user'
 					});
 				}
 				req.login(user, function(err){
 					if(err){
 						return next(err);
 					}
 					res.send({
 						message: 'successful login',
 						username: user.local.fName
 					});
 				});	
 			})(req, res, next);
 		});

        // app.post('/login', passport.authenticate('local-login', {
        //     successRedirect : '/#/profile', // redirect to the secure profile section
        //     failureRedirect : '/#/login', // redirect back to the signup page if there is an error
        //     failureFlash : true // allow flash messages
        // }));

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}