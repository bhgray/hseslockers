'use strict';

angular.module('studentList')
.component('studentList', {
  templateUrl: '/components/student-list/student-list.template.html',
    controller: ['$http',
      function DashCtrl($http) {
        // this is so that you can refer to this object in the callback b/c
        // 'this' is out of scope in the callback.
        var self = this;
        self.orderProp = 'lastname';

        $http.get('components/students/students.json').then(function(response) {
          self.students = response.data;
      });
    }]
});
