'use strict';

StudentListCtrl.$inject = ['Student'];
function StudentListCtrl(Student) {

    var self = this;
    self.students = Student.query();
    self.orderProp = 'lastname';
    self.reverseSort = false;

    self.goto = function(id) {
      window.location = '#!/students/' + id;
    };

}


angular.module('studentList')
.component('studentList', {
  templateUrl: '/components/student-list/student-list.template.html',
  controller: StudentListCtrl
});
