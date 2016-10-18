angular.
  module('core.student').
  factory('Student', ['$resource',
    function($resource) {
      targetUrl = "http://57f940e9a50475110077fc34.mockapi.io/api/v1/students/:studentId";
      return $resource(targetUrl, {studentId: '@id'}, {
        update: {
          method:  'PUT'
        }
      });
    }
  ]);
