// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS

angularApp.controller('mainController', ['$scope', function($scope) {
    console.log('<<<Controller called>>>'+$scope.text);
    $scope.list = [];

    $scope.getValue = function() {

      console.log('Button clicked  '+$scope.text);
      console.log('using this obj '+this.text);
      $scope.list.push(this.text);
      this.text = '';
      this.text.focus();

    };
}]);
