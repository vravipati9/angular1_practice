// MODULE
var angularApp = angular.module('angularApp1', []);

// CONTROLLERS

angularApp.controller('filterController', function($scope) {
  $scope.customers = [
              { name: 'Dave Jones', city: 'Phoenix' },
              { name: 'Jamie Riley', city: 'Phoenix' },
              { name: 'Heedy Wahlin', city: 'Chandler' },
              { name: 'Thomas Winter', city: 'Seattle' }
          ];

console.log($scope.customers);

});
