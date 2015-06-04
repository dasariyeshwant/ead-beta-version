app.controller('mainCrl', ['$scope', '$resource', '$location', 'AddEmployee', function ($scope, $resource, $location, AddEmployee) {
 //$scope.model = {};
 $scope.skill_set = [];

  $scope.addNewSkill = function() {
   var newItemNo = $scope.skill_set.length+1;
    $scope.skill_set.push({});
  };
    
  $scope.removeSkill = function() {
    var lastItem = $scope.skill_set.length-1;
    $scope.skill_set.splice(lastItem);
  };

  // var skillNames = [];
  // for (skill in $scope.skill_set){
  //   skillNames.push(skill.skill_Name);
  // }
  // var employeeSkills = {'skill_name': skillNames};
  //   console.log('skill set are' +employeeSkills);

  var Employee = $resource('/api/employeeRegistration');

  Employee.query(function (results) {
    $scope.employees = results;
  });

  $scope.employees = [];

  $scope.nextSection = function(){
    $scope.email = AddEmployee.email($scope.employeeEmail, $scope.employeePassword);
    
  };

 

  $scope.createMeetup = function () {
    var employee = new Employee();
    employee.email = $scope.employeeEmail;
    employee.password = $scope.employeePassword;
    employee.first_name = $scope.first_name;
    employee.last_name = $scope.last_name;
    employee.mobile_number = $scope.mobile_number;
    console.log("the skill set is"+ $scope.skill_set);
    employee.skills =[{'skill_name': $scope.skill_set}] ;
    //employee.skills.skill_name = $scope.model.skill_set;
    employee.address = $scope.address;
    employee.$save(function (result) {
      $scope.employees.push(result);
      $scope.employeeName = '';
      $location.path("success");
    });
  }
  
}]);

app.controller('secondCrl', ['$scope', '$resource', '$location', 'AddEmployee', function ($scope, $resource, $location, AddEmployee){
 $scope.secondSection = function(){
      $scope.first_name = AddEmployee.personal($scope.first_name);
  };
}]);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/',{
      url:'/',
      templateUrl:'main.html',
      controller: 'mainCrl'
    })
    .state('/registration_form',{
      url:'/registration_form',
      templateUrl: 'register.html',
      controller: 'mainCrl'
    })
    .state('/registration_form.signUp',{
      url:'/registration_form.signUp',
      templateUrl:'signUp.html',
      controller:'mainCrl'
    })
    .state('/registration_form.personalDetails',{
      url:'/registration_form.personalDetails',
      templateUrl:'personalDetails.html',
      controller:'secondCrl'
    })
    .state('/registration_form.qualifications',{
      url:'/registration_form.qualifications',
      templateUrl:'qualifications.html',
      controller: 'mainCrl'
    })
    .state('/registration_form.skills',{
      url:'/registration_form.skills',
      templateUrl:'skills.html',
      controller:'mainCrl'
    });

    $urlRouterProvider.otherwise('/');
})