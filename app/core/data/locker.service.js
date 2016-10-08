angular.
  module('core.locker').
  factory('Locker', ['$resource',
    function($resource) {
      // $resource(URL, paramDefaults, actions, options)
      // paramDefaults can be overidden in actions, which is what we've done

      // for now, just return the entire file....
      // targetUrl = "http://localhost:3000/lockers/:lockerId";
      targetUrl = "http://57f940e9a50475110077fc34.mockapi.io/api/v1/lockers/:lockerId";
      return $resource(targetUrl, {}, {
        query: {
          method:  'GET',
          params:  {lockerId: ''},
          isArray: true
        },
        'GET': {
          method: 'GET',
          params:  {lockerId: '@id'},
          isArray:  true
        },
        getLockerForStudent: {
          url: "http://57f940e9a50475110077fc34.mockapi.io/api/v1/students/:studentId/lockers",
          method:  'GET',
          params:  {studentId:  '@id'},
          isArray:  true
        }
      });
    }
  ]);
