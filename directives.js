// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS

angularApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    $scope.name = 'Ravipati';
    console.log($scope);
    $scope.handle = '';
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    };
    $scope.$watch('handle', function(newVal, old) {
      console.log('Changed!!');
      console.log('oldValue: '+old);
      console.log('newValue: '+newVal);
    });
    /*
    One way to /angularJs is to add variable to watch list by using scope.apply
    setTimeout(function() {
       $scope.$apply(function() {
           $scope.handle = 'sivaravipati'
           console.log('timeout function called');
       })
    }, 3000);*/
    $timeout(function() {
      $scope.handle = 'sivaravipati'
      console.log('timeout function called');
    }, 3000);

}]);
