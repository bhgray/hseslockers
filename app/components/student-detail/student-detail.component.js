angular.
  module('studentDetail').
  component('studentDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.studentId}}</span>',
    controller: ['$routeParams',
      function StudentDetailController($routeParams) {
        this.studentId = $routeParams.studentId;
      }
    ]
  });
