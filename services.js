// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONTROLLERS
angularApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/third.html',
    controller: 'mainController'

  })
  .when('/second', {
    templateUrl: 'pages/fourth.html',
    controller: 'secondController'
  })
});

angularApp.service('nameService', function() {
  var self = this;
  this.name = 'Siva';

  this.namelength = function() {
    return self.name.length;
  }

  this.findLength = function(name){
       // return a Promise object so that the caller can handle success/failure
       return name.length;
  }
});
angularApp.controller('mainController', ['$scope', '$log', '$http', 'nameService', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called>>>');
    $scope.name = nameService.name;

     $scope.$watch('name', function() {
       //watch for name variable changes, update in nameService
       nameService.name = $scope.name;
     });

    console.log(nameService.findLength($scope.name));



    // here log service is a single ton
    $log.main = 'property from main';
    $log.log($log);
    $log.log('Name service property '+nameService.name);
    $log.log('Name service called and length is '+nameService.namelength());
}]);


angularApp.controller('secondController', ['$scope', '$log', '$http', 'nameService', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called sec>>>');
    $scope.name = nameService.name;

    //watch for name variable changes, update in nameService
     $scope.$watch('name', function() {
       nameService.name = $scope.name;
     });

    // same log service is used as well
    $log.second = 'property from second';
    console.log(nameService.findLength($scope.name));
    $log.log($log);
}]);
