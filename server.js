var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    employeeRegistrationController = require('./server/controllers/employees-controller');

mongoose.connect('mongodb://localhost:27017/ead-beta');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
 app.use(express.static(__dirname + '/client/views'));
//REST API
app.get('/api/employeeRegistration', employeeRegistrationController.list);
app.post('/api/employeeRegistration', employeeRegistrationController.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})