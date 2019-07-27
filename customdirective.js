// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONTROLLERS
angularApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/usingCustomDirective.html',
    controller: 'mainController'
  })
});

angularApp.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http) {
    console.log('<<<Controller called>>>');

}]);

//searchResult is customdirective
angularApp.directive("searchResult", function() {
  return {
    restrict: 'AE',  <!--displays as attribute(A), E means displays as element, C means displays as class element, M for comments -->
    template: '<a href="#" class="list-group-item">' +
                  '<h5 class="mb-1">Ravipati, Veera</h5>' +
                  '<p class="mb-1">123 Old St, Washington DC.</p>'+
              '</a>',
    replace: true <!-- it replaces searchResult completly, means in generated html, search-result tag will not show -->
  }
});
