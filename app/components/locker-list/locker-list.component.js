'use strict';
LockerListCtrl.$inject = ['Locker'];
function LockerListCtrl(Locker) {

    var self = this;
    self.lockers = Locker.query();
    self.orderProp = 'id';
    self.reverseSort = false;

    self.goto = function(id) {
      window.location = '#!/lockers/' + id;
    }

}

angular.module('lockerList')
.component('lockerList', {
  templateUrl: '/components/locker-list/locker-list.template.html',
    controller: LockerListCtrl
});
