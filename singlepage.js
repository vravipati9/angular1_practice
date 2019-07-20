// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS

angularApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log('<<<Controller called>>>');

    $scope.names = [
      { first : "veera"},
      { first : "venkata"}
    ];

    $scope.countries = '';

    $http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;')
    .success(function (result) {
      console.log(result);
      $scope.countries = result;

    })
    .error(function (data, status) {
      console.log('Error occured while processing');
    })


}]);
