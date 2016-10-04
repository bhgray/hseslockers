'use strict';

angular.module('lockerList')
.component('lockerList', {
  templateUrl: '/components/locker-list/locker-list.template.html',
    controller: ['Locker',
      function LockerListCtrl(Locker) {
        // this is so that you can refer to this object in the callback b/c
        // 'this' is out of scope in the callback.
        //  Note: not necessary anymore now that we are not using $http service
        // directly here.
        var self = this;
        self.lockers = Locker.query();
        self.orderProp = 'id';
    }]
});
