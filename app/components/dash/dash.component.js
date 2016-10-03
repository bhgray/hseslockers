'use strict';

angular.module('hseslockers.dash')
.component('dashlist', {
  templateUrl: '/components/dash/dash.template.html',
    controller: function DashCtrl() {
      this.students = [
        {
          firstname: 'Luke',
          lastname:  'Gray',
          idnumber:  '1234567'
        },
        {
          firstname: 'Tommy',
          lastname:  'Gray',
          idnumber:  '1366567'
        },
        {
          firstname: 'Mary Beth',
          lastname:  'Gray',
          idnumber:  '1239976'
        }
      ];
    }
});
