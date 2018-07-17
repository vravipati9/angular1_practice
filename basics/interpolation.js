// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS

angularApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Ravipati';
    console.log($scope);

    $timeout(function() {
      $scope.name = 'Veera';
    }, 3000);
    
}]);
