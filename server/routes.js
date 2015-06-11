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

 
        // process the signup form
        app.post('/signup', function(req, res, next){
        	passport.authenticate('local-signup', function(err, user, info){
        		if(err){
        			res.redirect('/#/signup');
        		}
        		else{
        			res.send({
        				message: 'successful signup',
                        user: user
        			});
        		}
        	})(req, res, next);
        });


          // route for logging out
            app.get('/logout', function(req, res) {
                req.logout();
                res.send({message:'logged out'});
            });


       

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
 						user: user
 						// firstName: user.local.fName,
 						// lastName: user.local.lName
 					});
 				});	
 			})(req, res, next);
 		});
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}