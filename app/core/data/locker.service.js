angular.
  module('core.locker').
  factory('Locker', ['$resource',
    function($resource) {
      // $resource(URL, paramDefaults, actions, options)
      // paramDefaults can be overidden in actions, which is what we've done

      // for now, just return the entire file....
      // targetUrl = "http://localhost:3000/lockers/:lockerId";
      targetUrl = "http://57f940e9a50475110077fc34.mockapi.io/api/v1/lockers/:lockerId";
      return $resource(targetUrl, {lockerId: '@id'}, {
        update: {
          method:  'PUT'
        },
        getLockerForStudent: {
          url: "http://57f940e9a50475110077fc34.mockapi.io/api/v1/students/:studentId/lockers",
          method:  'GET',
          params:  {studentId:  '@studentId'},
          isArray:  true
        }
      });
    }
  ]);
