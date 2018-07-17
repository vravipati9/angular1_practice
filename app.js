// MODULE
var angularApp = angular.module('angularApp', ['']);

// CONTROLLERS
angularApp.controller('mainController', function($scope, $log, $filter) {
    console.log($scope);

    $scope.name = 'veera';
    $scope.formattedName = $filter('uppercase')($scope.name);
    $log.info($scope.formattedName);
    $scope.getname = function(name) {
      return 'asfsfasdfsfsf asfaf';
    }
});

var searchPeople = function(firstName, lastName, age) {
    return 'dummy string';
}
console.log(angular.injector().annotate(searchPeople));
var person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
var john = new person('John', 'Doe');
var tom = new person('tom', 'bruce')
function logPerson(person) {

  console.log(person);
}

//logPerson(john);
