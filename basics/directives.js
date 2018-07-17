// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS

angularApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.name = 'Ravipati';
    console.log($scope);
    $scope.handle = '';
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    }

}]);
