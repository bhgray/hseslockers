StudentListCtrl.$inject = ['Student'];
function StudentListCtrl(Student) {

    var self = this;
    self.students = Student.query();
    self.orderProp = 'lastname';
    self.reverseSort = false;

    self.$onInit = function() {
      console.log('onInit StudentList component');
    }

    self.goto = function(id) {
      window.location = '#!/students/' + id;
    };

    self.changeSort = function(newSort) {
      self.orderProp = newSort;
    };

    self.changeReverseSort = function() {
      self.reverseSort = !self.reverseSort;
    };
}


angular.module('studentList')
.component('studentList', {
  templateUrl: '/components/student-list/student-list.template.html',
  controller: StudentListCtrl
});
