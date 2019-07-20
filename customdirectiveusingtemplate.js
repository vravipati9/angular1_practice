// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONTROLLERS
angularApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/fifth.html',
    controller: 'mainController'

  })
  .when('/second', {
    templateUrl: 'pages/sixth.html',
    controller: 'secondController'
  })
});

angularApp.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called>>>');
    $scope.person = {
      name: 'Veera',
      address: '123 Old St, Washington DC...'
    }
}]);


angularApp.controller('secondController', ['$scope', '$log', '$http', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called sec>>>');

}]);

//searchResult is customdirective, search-result
angularApp.directive("searchResult", function() {
  return {
    restrict: 'AE',
    templateUrl: 'pages/searchresult.html',
    replace: true,
    scope : {
      personName: "@",
      personAddressVar: "@personAddress"
      <!--@ for text as single way binding and = for object as 2 way binding-->
    }
  }
});
