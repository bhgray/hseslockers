'use strict';

// Declare app level module which depends on views, and components
angular.module('hseslockers', [
  'ngRoute',
  'hseslockers.dash',
  'hseslockers.admin',
  'hseslockers.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/dash', {
      templateUrl: 'components/dash/dash.html',
      controller: 'DashCtrl'
    }).
    when('admin', {
      templateUrl: 'components/admin/admin.html',
      controller: 'AdminCtrl'
    }).
    otherwise({redirectTo: '/dash'});
}]);
