app.controller('mainCrl', ['$scope','$http', '$resource', '$localStorage', '$location', 'AddEmployee', function ($scope, $http, $resource, $localStorage, $location, AddEmployee) {
 //$scope.model = {};
 $scope.skill_set = [];


 // $scope.createUser = function(){
 //  $http.post('/signup',{
 //    email: $scope.employeeEmail,
 //    password: $scope.employeePassword,
 //    fName:    $scope.fName,
 //    lName:    $scope.lName
 //  }).success(function(data){
 //    if(data.message === 'successful signup'){
 //      $location.path('/profile');
 //    }
 //  });
 // };


 $scope.createUser = function(){
  $scope.signup = AddEmployee.addDetails($scope.employeeEmail, $scope.employeePassword, $scope.fName, $scope.lName);
 };
//$scope.myProfile = {};

 //  var getProfileData = function(){
 //  $http.get('/api/profile').success(function(data){
 //    console.log('data of user',data);
 //  });
 // }

 // $scope.userLogin =function(){
 //  $http.post('/login',{
 //    email: $scope.employeeEmail,
 //    password: $scope.employeePassword
 //  }).success(function(data){
 //    console.log("this is: "+data.username);
 //    $scope.first_name = data.username;
 //    if(data.message ==='successful login'){
 //      $location.path('/profile');
 //    }
 //  });
 // };


$scope.userLogin = function(){
    $scope.login = AddEmployee.userDetails($scope.employeeEmail, $scope.employeePassword);
    
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

app.controller('secondCrl', ['$scope', '$resource', '$http', '$localStorage', '$location', 'AddEmployee', function ($scope, $resource, $http, $localStorage, $location, AddEmployee){
        
      var init = function(){

        //personal Details
           $scope.first_name = $localStorage.profile.fname; 
           $scope.last_name = $localStorage.profile.lname;

           $scope.mobile_number = $localStorage.profile.mobile_number;
            $scope.address = $localStorage.profile.address;
        //educational Details
           $scope.school_name = $localStorage.profile.school_name;
           $scope.passout_year = $localStorage.profile.passout_year;
           $scope.degree = $localStorage.profile.degree;
           $scope.field_of_study = $localStorage.profile.field_of_study;
           $scope.grade = $localStorage.profile.grade;
        //employement Details
           $scope.company_name = $localStorage.profile.company_name;
           $scope.duration_from = $localStorage.profile.duration_from;
           $scope.duration_till = $localStorage.profile.duration_till;
           $scope.title = $localStorage.profile.title;
           $scope.location = $localStorage.profile.location;
           $scope.description = $localStorage.profile.description;
        //technical skills
           $scope.skills = $localStorage.profile.skills;
        //visa status
           $scope.ead_status = $localStorage.profile.ead_status;
           $scope.spouse_h1b = $localStorage.profile.spouse_h1b;
           $scope.last_entry = $localStorage.profile.last_entry;
        //resume details
           $scope.reference = $localStorage.profile.reference;
          //$scope.first_name = AddEmployee.personal;
          console.log("welcome : "+$scope.first_name);
      };    
      init();
      
      $scope.updateDetails = function(){
        $http.post('/update',{
           id: $localStorage.user,
          fName: $scope.first_name,
          lName: $scope.last_name,
          address: $scope.address
        }).success(function(data){
          console.log("address has been changed") ;
         // console.log("new id field is: "+id);
        });
      };


      $scope.savePersonalDetails = function(){
        
        $localStorage.profile.fname = $localStorage.profile.fname;
        $localStorage.profile.lname = $localStorage.profile.lname;
         $localStorage.profile.mobile_number = $scope.mobile_number;
         $localStorage.profile.address = $scope.address;
         $location.path('/profile/qualifications');
      };


      $scope.saveQualifications = function(){
        $localStorage.profile.school_name = $scope.school_name;
        $localStorage.profile.passout_year = $scope.passout_year;
        $localStorage.profile.degree = $scope.degree;
        $localStorage.profile.field_of_study = $scope.field_of_study;
        $localStorage.profile.grade = $scope.grade;
        $localStorage.profile.company_name = $scope.company_name;
        $localStorage.profile.duration_from = $scope.duration_from;
        $localStorage.profile.duration_till = $scope.duration_till;
        $localStorage.profile.title = $scope.title;
        $localStorage.profile.location = $scope.location;
        $localStorage.profile.description = $scope.description;
        $location.path('/profile/skills');
      };


      $scope.saveSkills = function(){
        $localStorage.profile.skills = $scope.skills;
        $location.path('/profile/visaStatus');
      };

      $scope.saveVisaStatus = function(){
        $localStorage.profile.ead_status = $scope.ead_status;
        $localStorage.profile.spouse_h1b = $scope.spouse_h1b;
        $localStorage.profile.last_entry = $scope.last_entry;
        $location.path('/profile/resume');
      }


      $scope.logOut = function(){
        $http.get('/logout').success(function(response){
          if(response.message === 'logged out'){
            delete $localStorage.profile;
            // delete $localStorage.fname;
            // delete $localStorage.lname;
            // delete $localStorage.user;
            // delete $localStorage.user_id;
            // delete $localStorage.first_name;
            // delete $localStorage.last_name;
            //$localStorage.save();
            //$window.location.reload();
            console.log("successfully logged out");

            $location.path('/');
          }
          
        });
      };
}]);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('/',{
      url:'/',
      templateUrl:'main.html',
      controller: 'mainCrl'
    })
    .state('/signup',{
      url:'/signup',
      templateUrl: 'signUp.html',
      controller: 'mainCrl'
    })
    .state('/profile',{
      url:'/profile',
      templateUrl:'profile.html',
      controller:'secondCrl'
      // resolve : {profile:function(c){console.log('called');}}
    })
    .state('/profile.personalDetails',{
      url:'/details',
      templateUrl:'personalDetails.html',
      controller:'secondCrl'
    })
    .state('/profile.qualifications',{
      url:'/qualifications',
      templateUrl:'qualifications.html',
      controller:'secondCrl'
    })
    .state('/profile.skills',{
      url:'/skills',
      templateUrl:'skills.html',
      controller:'secondCrl'
    })
    .state('/profile.visaStatus',{
      url:'/visaStatus',
      templateUrl:'visaStatus.html',
      controller:'secondCrl'
    })
    .state('/profile.resume',{
      url:'/resume',
      templateUrl:'resume.html',
      controller:'secondCrl'
    })
    .state('/login',{
      url:'/login',
      templateUrl:'login.html',
      controller:'mainCrl'
    });
    $urlRouterProvider.otherwise('/');
})