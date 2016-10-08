angular.
  module('core.student').
  factory('Student', ['$resource',
    function($resource) {
      // $resource(URL, paramDefaults, actions, options)
      // paramDefaults can be overidden in actions, which is what we've done

      // for now, just return the entire file....
      // targetUrl = "http://localhost:3000/students/:studentId";
      targetUrl = "http://57f940e9a50475110077fc34.mockapi.io/api/v1/students/:studentId";
      // studentDetailLookupURL = targetUrl + "/:studentId/lockers";
      return $resource(targetUrl, {}, {
        query: {
          method:  'GET',
          params:  {studentId: ''},
          isArray: true
        }
      });
    }
  ]);
