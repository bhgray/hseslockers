'use strict';

angular.module('studentList')
.component('studentList', {
  templateUrl: '/components/student-list/student-list.template.html',
    controller: ['Student',
      function StudentListCtrl(Student) {
        // this is so that you can refer to this object in the callback b/c
        // 'this' is out of scope in the callback.
        //  Note: not necessary anymore now that we are not using $http service
        // directly here.
        var self = this;
        self.students = Student.query();
        self.orderProp = 'lastname';
    }]
});
