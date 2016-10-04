angular.
  module('core.locker').
  factory('Locker', ['$resource',
    function($resource) {
      // $resource(URL, paramDefaults, actions, options)
      // paramDefaults can be overidden in actions, which is what we've done

      // for now, just return the entire file....
      targetUrl = "http://localhost:3000/lockers/:lockerId";
      return $resource(targetUrl, {lockerId: '@id'});
    }
  ]);
