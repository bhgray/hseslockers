'use strict';

// Declare app level module which depends on views, and components
angular.module('hseslockers').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/students', {
      template:  '<student-list></student-list>'
    }).
    when('/students/:studentId', {
      template:  '<student-detail></student-detail>'
    }).
    when('/admin', {
      templateUrl: 'components/admin/admin.html',
      controller: 'AdminCtrl'
    }).
    otherwise({redirectTo: '/students'});
}]);
