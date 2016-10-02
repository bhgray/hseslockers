'use strict';

angular.module('hseslockers.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'components/admin/admin.html',
    controller: 'AdminCtrl'
  });
}])

.controller('AdminCtrl', [function() {

}]);
