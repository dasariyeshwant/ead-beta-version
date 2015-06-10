var EmployeeService = angular.module('EmployeeService',[])
	.service('AddEmployee', function($http, $location, $localStorage){
			var first_name="";
			var usr_details="";
		
		this.addDetails = function(email, password, fname, lname){
			$http.post('/signup',{
				email: email,
				password: password,
				fName: fname,
				lName: lname
			}).success(function(data){
				if(data.message === 'successful signup'){
					$localStorage.profile={};
					$localStorage.profile.fname = data.user.local.fName;
					$localStorage.profile.lname = data.user.local.lName;
     			 $location.path('/profile/details');
   				}
			});
		};	



		this.userDetails = function(user_email, user_password){
			$http.post('/login',{
				email: user_email,
				password: user_password
			}).success(function(data){
				$localStorage.profile={};
				
				 // console.log("this is: "+data.user.local.fName);
				 // console.log("this is: "+data.user._id);
				// $localStorage.user_id = data.user._id;
				 //$localStorage.user= data.user;
				first_name = data.user.local.fName;
			// 	$localStorage.profile = {first_name: "",
			// 	last_name:"",

			// }

				$localStorage.profile.fname = data.user.local.fName;
				$localStorage.profile.lname = data.user.local.lName;
				if(data.message ==='successful login'){

				console.log("username1: "+first_name);
      			$location.path('/profile/details');
      			return first_name;
      			
      			}

			});
			
		};


		this.personal = first_name;

		// this.personal = function(){
		// 	usr_details = first_name;
		// 	console.log("these details belong to: "+ usr_details);
		// 	return usr_details;
		// };

});
		//  var Employee = $resource('/api/employeeRegistration');
		//  	var emp_email="";
		//  	var usr_password="";
		// this.email = function(email, password){
		// 	emp_email = email;
		// 	usr_password = password;
		// 		return emp_email;
		// 		return usr_password;
		// };
			
		// this.personal = function(first_name){
		// 	    var employee = new Employee();
		// 	    employee.email = emp_email;
		// 	    employee.password = usr_password;
		// 	     employee.first_name = first_name;
		// 	      employee.$save();
		// };
	