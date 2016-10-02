'use strict';

angular.module('hseslockers.dash', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dash', {
    templateUrl: 'components/dash/dash.html',
    controller: 'DashCtrl'
  });
}])

.controller('DashCtrl', [function() {

}]);
