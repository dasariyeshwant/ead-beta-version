var User = require('../models/user');


/*function for updating the user details====================================================================================*/
module.exports.update = function(req, res){
	User.findByIdAndUpdate(req.body.profile.user_id, 
		{$set:{	'local.fName': req.body.profile.fname,
				'local.lName': req.body.profile.lname,
		 		'profile.mobile_number':req.body.profile.mobile_number,
		  		'profile.address': req.body.profile.address,
		  		'profile.education':[{	'school_name':req.body.profile.school_name,
		  								'passout_year':req.body.profile.passout_year,
		  								'degree':req.body.profile.degree,
		  								'field_of_study':req.body.profile.field_of_study,
		  								'grade':req.body.profile.grade
		  							}],
		  		'profile.employement_history':[{'company_name':req.body.profile.company_name,
		  										'duration_from':req.body.profile.duration_from,
		  										'duration_till':req.body.profile.duration_till,
		  										'title':req.body.profile.title,
		  										'location':req.body.profile.location,
		  										'description':req.body.profile.description
		  									  }],
		  		'profile.skills': req.body.profile.skills,
		  		'profile.ead_status': req.body.profile.ead_status,
		  		'profile.spouse_h1b_validity': req.body.profile.spouse_h1b,
		  		'profile.last_entry_date': req.body.profile.last_entry,
		  		'profile.reference': req.body.profile.reference
		  	}}, function(err, user){
			if(err) return handleError(err);
			res.send(user);		
		});
}

