// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS

angularApp.controller('mainController', ['$scope', function($scope) {
    console.log('<<<Controller called>>>');
    $scope.alertClick = function() {
      console.log('asfafsfsfsf');
      alert('Button clicked');
    };
}]);
