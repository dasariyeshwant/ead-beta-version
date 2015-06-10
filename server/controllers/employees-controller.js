var User = require('../models/user');

module.exports.update = function(req, res){
	console.log("requested user is: "+req.user);
	User.findByIdAndUpdate('5577550ed54f2f871ee9f0d0', {$set:{fName: "yashwant"}}, function(err, user){
		if(err) return handleError(err);
		res.send(user);		
	});
}

// module.exports.create = function (req, res) {
//   var employee = new Employee(req.body);
//   employee.save(function (err, result) {
//     res.json(result);
//   });
// }

// module.exports.list = function (req, res) {
//   Employee.find({}, function (err, results) {
//     res.json(results);
//   });
// }