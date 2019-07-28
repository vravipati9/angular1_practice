// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

// CONTROLLERS
angularApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/usingCustomDirectiveNormalization.html',
    controller: 'mainController'

  })
});

angularApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    console.log('<<<Controller called>>>');
    $scope.person = {
       name: 'John Smith',
       address: '123 Main St., FL 12345'
    }
}]);



//searchResult is customdirective, search-result
angularApp.directive("searchResult", function() {
  return {
    restrict: 'AE',
    templateUrl: 'pages/searchresultNormalization.html',
    replace: true,
    // to isolate the scope from model to directive, we use below in directives. otherwise above person model is accessable in directive
    // scope: {}

    //to isolate the scope as well as to pass model object, we can use use below in directive. personName is attribute for search-result directive in html
    scope : {
      personName: "@",
      personAddressVar: "@personAddress" //normalized attribute name from attribute declaration
      //personObject: "="
      <!--@ is for text as single way binding and = for object as 2 way binding-->
      <!-- & is for function -->
    }
  }
});
