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

});
angularApp.controller('mainController', ['$scope', '$log', '$http', 'nameService', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called>>>');
    $scope.name = nameService.name;

    $scope.$watch('name', function() {
      nameService.name = $scope.name;
    });
    // here log service is a single ton
    $log.main = 'property from main';
    $log.log($log);
    $log.log('Name service property '+nameService.name);
    $log.log('Name service called and length is '+nameService.namelength());
}]);


angularApp.controller('secondController', ['$scope', '$log', '$http', 'nameService', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called sec>>>');
    $scope.name = nameService.name;

    $scope.$watch('name', function() {
      nameService.name = $scope.name;
    });
    // same log service is used as well
    $log.second = 'property from second';
    $log.log($log);
}]);
