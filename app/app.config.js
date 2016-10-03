'use strict';

// Declare app level module which depends on views, and components
angular.module('hseslockers').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/dash', {
      template:  '<dashlist></dashlist>'
    }).
    when('/students/:studentId', {
      template:  '<student-detail></student-detail>'
    }).
    when('/admin', {
      templateUrl: 'components/admin/admin.html',
      controller: 'AdminCtrl'
    }).
    otherwise({redirectTo: '/dash'});
}]);
