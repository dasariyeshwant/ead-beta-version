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

// route to test if the user is logged in or not
 app.get('/loggedin', function(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
 });  
  
        // process the signup form
        app.post('/signup', function(req, res, next){
        	passport.authenticate('local-signup', function(err, user, info){
        		if(err){
                    console.log("this email is already taken");
        			res.redirect('/#/signup');
        		}
                if (!user) {
                    console.log("test1");
                    res.send({
                        message: 'email used'
                    });
                }
               	if(user){
        			res.send({
        				message: 'successful signup',
                        user: user
        			});
        		}
        	})(req, res, next);
        });

 // app.post('/signup', function(req, res, next){
 //            passport.authenticate('local-signup', function(err, user, info){
 //                if(err){
 //                    return next(err);
 //                    //res.redirect('/#/signup');
 //                }
 //                if(user){
 //                    return res.send(401,{ success : false, message : 'authentication failed' });
 //                    res.send({
 //                        message:'no user'
 //                    });
 //                }
 //                req.login(user, function(err){
 //                    if(err){
 //                        return next(err);
 //                    }
 //                    res.send({
 //                        message: 'successful signup',
 //                        user: user
 //                    });
 //                });
 //            })(req, res, next);
 //        });



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
                    return res.send(401,{ success : false, message : 'authentication failed' });
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
 var auth = function (req, res, next){
            if (!req.isAuthenticated()) {
                res.send(401);
            }
            else
                next();
        };
// // route middleware to ensure user is logged in
// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//     res.redirect('/');
// }