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

}]);


angularApp.controller('secondController', ['$scope', '$log', '$http', function($scope, $log, $http, nameService) {
    console.log('<<<Controller called sec>>>');

}]);

//searchResult is customdirective
angularApp.directive("searchResult", function() {
  return {
    restrict: 'A',  <!--displays as attribute(A), E means displays as element, C means displays as class element -->
    template: '<a href="#" class="list-group-item">' +
                  '<h5 class="mb-1">Ravipati, Veera</h5>' +
                  '<p class="mb-1">123 Old St, Washington DC.</p>'+
              '</a>',
    replace: true
  }
});
