/*
    using ngRoute, I have access to the controller $routeParams, and thus
    studentId.

    If we want other data, though we need to do a lookup here or using
    the student service.
*/
angular.
  module('studentDetail').
  component('studentDetail', {
    templateUrl: 'components/student-detail/student-detail.template.html',
    controller: ['$routeParams', 'Student', 'Locker',
      function StudentDetailController($routeParams, Student, Locker, editableOptions) {
        var self = this;
        var targetId = $routeParams.studentId;
        self.student = Student.get({studentId: targetId});
        self.locker = Locker.getLockerForStudent({studentId:  targetId});

        self.saveStudent = function() {
          self.student.$update(function() {
            console.log("updated " + self.student);
          });
        }
        self.deleteStudent = function() {
          self.student.$delete(function() {
            console.log("deleted " + self.student);
            window.location = '#!/students/';
          });
        }

      }
    ]
  });
