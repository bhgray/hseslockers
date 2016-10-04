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
    controller: ['$routeParams', 'Student',
      function StudentDetailController($routeParams, Student) {
        var self = this;
        self.student = Student.get({studentId: $routeParams.studentId});
      }
    ]
  });
