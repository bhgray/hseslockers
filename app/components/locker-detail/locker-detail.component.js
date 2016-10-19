'use strict';

angular.module('lockerDetail')
.component('lockerDetail', {
    templateUrl: 'components/locker-detail/locker-detail.template.html',
    controller: ['$routeParams', 'Locker',
      function LockerDetailController($routeParams, Locker) {
        var self = this;
        self.locker = Locker.get({lockerId: $routeParams.lockerId});

        self.saveLocker = function() {
          self.locker.$update(function() {
            console.log("updated " + self.locker);
          });
        }
        self.deleteStudent = function() {
          self.locker.$delete(function() {
            console.log("deleted " + self.locker);
            window.location = '#!/lockers/';
          });
        }



      }
    ]
  });
