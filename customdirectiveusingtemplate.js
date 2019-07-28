// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONTROLLERS
angularApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/usingCustomDirective.html',
    controller: 'mainController'

  })
});

angularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    console.log('<<<Controller called>>>');
    $scope.person = {
       name: 'John Smith',
       address: '123 Main St., FL 12345'
    }
}]);

//searchResult is customdirective, search-result
angularApp.directive("searchResult", function() {
  return {
    restrict: 'AECM',
    templateUrl: 'pages/searchresult.html',
    replace: true
  }
});
