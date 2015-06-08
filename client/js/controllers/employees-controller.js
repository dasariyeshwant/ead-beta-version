app.controller('mainCrl', ['$scope','$http', '$resource', '$location', 'AddEmployee', function ($scope,$http, $resource, $location, AddEmployee) {
 //$scope.model = {};
 $scope.skill_set = [];


 $scope.createUser = function(){
  $http.post('/signup',{
    email: $scope.employeeEmail,
    password: $scope.employeePassword,
    fName:    $scope.fName,
    lName:    $scope.lName
  }).success(function(data){
    if(data.message === 'successful signup'){
      $location.path('/profile');
    }
  });
 };


//   // $scope.addNewSkill = function() {
//   //  var newItemNo = $scope.skill_set.length+1;
//   //   $scope.skill_set.push({});
//   // };
    
//   // $scope.removeSkill = function() {
//   //   var lastItem = $scope.skill_set.length-1;
//   //   $scope.skill_set.splice(lastItem);
//   // };

//   // var skillNames = [];
//   // for (skill in $scope.skill_set){
//   //   skillNames.push(skill.skill_Name);
//   // }
//   // var employeeSkills = {'skill_name': skillNames};
//   //   console.log('skill set are' +employeeSkills);

//   var Employee = $resource('/api/employeeRegistration');

//   // Employee.query(function (results) {
//   //   $scope.employees = results;
//   // });

//   // $scope.employees = [];

//   // $scope.nextSection = function(){
//   //   $scope.email = AddEmployee.email($scope.employeeEmail, $scope.employeePassword);
    
//   // };

 

//   // $scope.createMeetup = function () {
//   //   var employee = new Employee();
//   //   employee.email = $scope.employeeEmail;
//   //   employee.password = $scope.employeePassword;
//   //   employee.first_name = $scope.first_name;
//   //   employee.last_name = $scope.last_name;
//   //   employee.mobile_number = $scope.mobile_number;
//   //   console.log("the skill set is"+ $scope.skill_set);
//   //   employee.skills =[{'skill_name': $scope.skill_set}] ;
//   //   //employee.skills.skill_name = $scope.model.skill_set;
//   //   employee.address = $scope.address;
//   //   employee.$save(function (result) {
//   //     $scope.employees.push(result);
//   //     $scope.employeeName = '';
//   //     $location.path("success");
//   //   });
//   // }
  
}]);

// // app.controller('secondCrl', ['$scope', '$resource', '$location', 'AddEmployee', function ($scope, $resource, $location, AddEmployee){
// //  $scope.secondSection = function(){
// //       $scope.first_name = AddEmployee.personal($scope.first_name);
// //   };
// // }]);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/',{
      url:'/',
      templateUrl:'index.html',
      controller: 'mainCrl'
    })
    .state('/signup',{
      url:'/signup',
      templateUrl: 'signUp.html',
      controller: 'mainCrl'
    })
    .state('/profile',{
      url:'/profile',
      templateUrl:'sample.html',
      controller:'mainCrl'
    })
    .state('/login',{
      url:'/login',
      templateUrl:'login.html',
      controller:'mainCrl'
    });
    $urlRouterProvider.otherwise('/');
})