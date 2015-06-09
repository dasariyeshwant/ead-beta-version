var EmployeeService = angular.module('EmployeeService',[])
	.service('AddEmployee', function($http, $location){
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
     			 $location.path('/profile');
   				}
			});
		};	



		this.userDetails = function(user_email, user_password){
			$http.post('/login',{
				email: user_email,
				password: user_password
			}).success(function(data){
				 console.log("this is: "+data.username);
				first_name = data.username;
				if(data.message ==='successful login'){
				console.log("username1: "+first_name);
      			$location.path('/profile');
      			return first_name;
      			
      			}

			});
			return first_name;	
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
	