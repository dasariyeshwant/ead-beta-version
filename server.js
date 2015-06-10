var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    passport		  = require('passport'),
    flash    = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    session      = require('express-session'),
    employeeRegistrationController = require('./server/controllers/employees-controller');

mongoose.connect('mongodb://localhost:27017/ead-beta-v3');

app.use(bodyParser());

require('./config/passport')(passport); // pass passport for configuration

app.use('/js', express.static(__dirname + '/client/js'));
 app.use(express.static(__dirname + '/client/css'));
 app.use(express.static(__dirname + '/client/images'));
 app.use(express.static(__dirname + '/client/views'));
 app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// //REST API
// app.get('/api/employeeRegistration', employeeRegistrationController.list);
// app.post('/api/employeeRegistration', employeeRegistrationController.create);

app.post('/update', employeeRegistrationController.update);

// required for passport
 app.use(cookieParser()); // read cookies (needed for auth)

app.use(session({
    secret: 'ilovescotchscotchyscotchscotch',
    resave: true,
    saveUninitialized: true
}));

//app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
require('./server/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
app.listen(3000, function() {
  console.log('I\'m Listening...');
})