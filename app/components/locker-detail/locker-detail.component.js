'use strict';

angular.module('lockerDetail')
.component('lockerDetail', {
    templateUrl: 'components/locker-detail/locker-detail.template.html',
    controller: ['$routeParams', 'Locker',
      function LockerDetailController($routeParams, Locker) {
        var self = this;
        self.locker = Locker.get({lockerId: $routeParams.lockerId});
      }
    ]
  });
