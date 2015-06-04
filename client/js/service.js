var EmployeeService = angular.module('EmployeeService',[])
	.service('AddEmployee', function($resource){
		 var Employee = $resource('/api/employeeRegistration');
		 	var emp_email="";
		 	var usr_password="";
		this.email = function(email, password){
			emp_email = email;
			usr_password = password;
				return emp_email;
				return usr_password;
		};
			
		this.personal = function(first_name){
			    var employee = new Employee();
			    employee.email = emp_email;
			    employee.password = usr_password;
			     employee.first_name = first_name;
			      employee.$save();
		};
	});