
/*service for creating new users and logging in===========================================================================*/
var EmployeeService = angular.module('EmployeeService',[])
	.service('AddEmployee', function($http, $location, $localStorage){
			
		//function for creating new user
		this.addDetails = function(email, password, fname, lname){
			$http.post('/signup',{
				email: email,
				password: password,
				fName: fname,
				lName: lname
			}).success(function(data){
				if(data.message === 'successful signup'){
					//initializing the profile object for local storage
					$localStorage.profile={};
					$localStorage.profile.user_id = data.user._id;
					$localStorage.profile.fname = data.user.local.fName;
					$localStorage.profile.lname = data.user.local.lName;

     			 $location.path('/profile/details');
   				}
			});
		};	


		//function for logging in and retrieving all the user details from database
		this.userDetails = function(user_email, user_password){
			$http.post('/login',{
				email: user_email,
				password: user_password
			}).success(function(data){
				//initializing the profile object for local storage
				$localStorage.profile={};
				//retrieving all the user information from database
				$localStorage.profile.user_id = data.user._id;
				$localStorage.profile.fname = data.user.local.fName;
				$localStorage.profile.lname = data.user.local.lName;
				$localStorage.profile.mobile_number = data.user.profile.mobile_number;
				$localStorage.profile.address = data.user.profile.address;
				$localStorage.profile.school_name = data.user.profile.education[0].school_name;
				$localStorage.profile.passout_year = data.user.profile.education[0].passout_year;
				$localStorage.profile.degree = data.user.profile.education[0].degree;
				$localStorage.profile.field_of_study = data.user.profile.education[0].field_of_study;
				$localStorage.profile.grade = data.user.profile.education[0].grade;
				$localStorage.profile.company_name = data.user.profile.employement_history[0].company_name;
				$localStorage.profile.duration_from = data.user.profile.employement_history[0].duration_from;
				$localStorage.profile.duration_till = data.user.profile.employement_history[0].duration_till;
				$localStorage.profile.title = data.user.profile.employement_history[0].title;
				$localStorage.profile.location = data.user.profile.employement_history[0].location;
				$localStorage.profile.description = data.user.profile.employement_history[0].description;
				$localStorage.profile.skills = data.user.profile.skills;
				$localStorage.profile.ead_status = data.user.profile.ead_status;
				$localStorage.profile.spouse_h1b = data.user.profile.spouse_h1b_validity;
				$localStorage.profile.last_entry = data.user.profile.last_entry_date;
				$localStorage.profile.reference = data.user.profile.reference;

				if(data.message ==='successful login'){
      			$location.path('/profile/details');
     			}

			});
			
		};
});
		
	