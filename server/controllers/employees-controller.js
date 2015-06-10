var User = require('../models/user');

module.exports.update = function(req, res){
	console.log("requested user is: "+req.body.profile.user_id);
	console.log("requested user is: "+req.body.profile.fname);
	console.log("requested mobile_number is: "+req.body.profile.mobile_number);
	console.log("requested address is: "+req.body.profile.address);
	console.log("requested school_name is: "+req.body.profile.school_name);
	console.log("requested passout_year is: "+req.body.profile.passout_year);
	console.log("requested degree is: "+req.body.profile.degree);
	console.log("requested field_of_study is: "+req.body.profile.field_of_study);
	console.log("requested grade is: "+req.body.profile.grade);
	console.log("requested company_name is: "+req.body.profile.company_name);
	console.log("requested duration_from is: "+req.body.profile.duration_from);
	User.findByIdAndUpdate(req.body.profile.user_id, 
		{$set:{	'local.fName': req.body.profile.fname,
				'local.lName': req.body.profile.lname,
		 		'profile.mobile_number':req.body.profile.mobile_number,
		  		'profile.address': req.body.profile.address}}, function(err, user){
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

// 'profile.education.school_name':req.body.profile.school_name,
// 		   		'profile.education.passout_year':req.body.profile.passout_year,
// 		  		'profile.education.degree': req.body.profile.degree,
// 		   		'profile.education.field_of_study': req.body.profile.field_of_study, 
// 		  		'profile.education.grade': req.body.profile.grade,
// 		   		'profile.employement_history.company_name': req.body.profile.company_name, 
// 		  		'profile.employement_history.duration_from': req.body.profile.duration_from