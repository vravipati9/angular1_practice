// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONTROLLERS
angularApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/repeated.html',
    controller: 'mainController'

  })

});

angularApp.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called 1>>>');
    $scope.people = [
      {
          name: 'John Doe',
          address: '555 Main St.',
          city: 'New York',
          state: 'NY',
          zip: '11111'
      },
      {
          name: 'Tony Doe',
          address: '222 second St.',
          city: 'Miami',
          state: 'FL',
          zip: '22222'
      },
      {
          name: 'George Doe',
          address: '555 Main St.',
          city: 'Atlanta',
          state: 'GA',
          zip: '33333'
      }
    ];

    $scope.formattedAddress = function(person) {

        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;

    };
}]);


//searchResult is customdirective, search-result
angularApp.directive("searchResult", function() {
  return {
    restrict: 'AE',
    templateUrl: 'pages/repeatedsearchresult.html',
    replace: true,
    scope: {
        personObject: "=",
        formattedAddressFunction: "&"
    }
  }
});
