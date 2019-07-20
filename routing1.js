// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONTROLLERS
angularApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'

  })
  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});
angularApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log('<<<Controller called>>>');
    $scope.name = 'Main';

}]);


angularApp.controller('secondController', ['$scope', '$http', function($scope, $http) {
    console.log('<<<Controller called>>>');
    $scope.name = 'Second';

}]);
