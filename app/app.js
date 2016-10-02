'use strict';

// Declare app level module which depends on views, and components
angular.module('hseslockers', [
  'ngRoute',
  'hseslockers.view1',
  'hseslockers.view2',
  'hseslockers.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
