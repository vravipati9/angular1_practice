// MODULE
var angularApp = angular.module('angularApp1', []);

// CONTROLLERS
angularApp.factory('simpleFactory', function($http) {
  var customers = [
              { name: 'Dave Jones', city: 'Phoenix' },
              { name: 'Jamie Riley', city: 'Phoenix' },
              { name: 'Heedy Wahlin', city: 'Chandler' },
              { name: 'Thomas Winter', city: 'Seattle' }
          ];
          var factory = {};
          factory.getCustomers = function() {
            return customers;
          }
          return factory;
  });


angularApp.controller('filterController', function($scope, simpleFactory) {
  $scope.customers = simpleFactory.getCustomers;



console.log($scope.customers);

});
