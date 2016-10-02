'use strict';

angular.module('hseslockers.version', [
  'hseslockers.version.interpolate-filter',
  'hseslockers.version.version-directive'
])

.value('version', '0.1');
