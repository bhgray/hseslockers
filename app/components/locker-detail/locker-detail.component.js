/*
    using ngRoute, I have access to the controller $routeParams, and thus
    studentId.

    If we want other data, though we need to do a lookup here or using
    the student service.
*/
angular.
  module('lockerDetail').
  component('lockerDetail', {
    templateUrl: 'components/locker-detail/locker-detail.template.html',
    controller: ['$routeParams', 'Locker',
      function LockerDetailController($routeParams, Locker) {
        var self = this;
        self.locker = Locker.get({lockerId: $routeParams.lockerId});
      }
    ]
  });
