angular.
  module('core.student').
  factory('Student', ['$resource',
    function($resource) {
      // $resource(URL, paramDefaults, actions, options)
      // paramDefaults can be overidden in actions, which is what we've done

      // for now, just return the entire file....
      targetUrl = "http://localhost:3000/students/:studentId";
      return $resource(targetUrl, {studentId: '@id'});
    }
  ]);
