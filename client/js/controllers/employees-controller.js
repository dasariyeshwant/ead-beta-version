/*First controller============================================================================================================*/
//this controller is used for signing up and logging in
app.controller('mainCrl', ['$scope','$http', '$resource', '$localStorage', '$location', 'AddEmployee', function ($scope, $http, $resource, $localStorage, $location, AddEmployee) {
 
  //function for sending the new user details to service.js for signing up
 $scope.createUser = function(){
  $scope.signup = AddEmployee.addDetails($scope.employeeEmail, $scope.employeePassword, $scope.fName, $scope.lName);
 };

//function for sending the existing user details to service.js for logging in
$scope.userLogin = function(){
    $scope.login = AddEmployee.userDetails($scope.employeeEmail, $scope.employeePassword);
    
};
 
}]);


/*Second controller=============================================================================================================*/

//this controller is used in all the form views
app.controller('secondCrl', ['$scope', '$resource', '$http', '$localStorage', '$location', 'AddEmployee', function ($scope, $resource, $http, $localStorage, $location, AddEmployee){
      /*function for getting all the input fields values as soon as user logs in  */
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
      init();       //function calling for reading all the values into input fields
 
      //function for saving the personal details to local storage
      $scope.savePersonalDetails = function(){
        
        $localStorage.profile.fname = $scope.first_name;
        $localStorage.profile.lname = $scope.last_name;
         $localStorage.profile.mobile_number = $scope.mobile_number;
         $localStorage.profile.address = $scope.address;
         $location.path('/profile/qualifications');
      };

      //function for saving the qualification details to local storage
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

      //function for saving the skills details to local storage
      $scope.saveSkills = function(){
        $localStorage.profile.skills = $scope.skills;
        $location.path('/profile/visaStatus');
      };

      //function for saving the visa details to local storage
      $scope.saveVisaStatus = function(){
        $localStorage.profile.ead_status = $scope.ead_status;
        $localStorage.profile.spouse_h1b = $scope.spouse_h1b;
        $localStorage.profile.last_entry = $scope.last_entry;
        $location.path('/profile/resume');
      };

      //function for saving the resume details to local storage and the updating the values in database
      $scope.updateProfile = function(){
        //console.log("prof: ", profile);
        $localStorage.profile.reference = $scope.reference;
        $http.post('/update',{profile: $localStorage.profile})
          .success(function(response){
            console.log("updated successfully");
          });
      };

      //logout functionality for entire app
      $scope.logOut = function(){
        $http.get('/logout').success(function(response){
          if(response.message === 'logged out'){
            delete $localStorage.profile;
            console.log("successfully logged out");
            $location.path('/');
          }
          
        });
      };
}]);


/*Routing for entire app==================================================================================================*/
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
});