// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS

angularApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    $scope.name = 'Ravipati';
    console.log($scope);
    $scope.handle = '';
    $scope.characters=5;
    $scope.lowercasehandle = function() {
      return $filter('lowercase')($scope.handle);
    };
    $scope.$watch('handle', function(newVal, old) {
      console.log('Changed!!');
    });

    $scope.rules = [
      {ruleName: "Must be 5 characters", ruleId:1},
      {ruleName: "Must be Alphabetical", ruleId:2},
      {ruleName: "Must be case sensitive", ruleId:3}
    ];

    console.log($scope.rules)
    /*
    One way to /angularJs is to add variable to watch list by using scope.apply
    setTimeout(function() {
       $scope.$apply(function() {
           $scope.handle = 'sivaravipati'
           console.log('timeout function called');
       })
    }, 3000);*/
    /* Better approach
    $timeout(function() {
      $scope.handle = 'sivaravipati'
      console.log('timeout function called');
    }, 3000);
*/
}]);
