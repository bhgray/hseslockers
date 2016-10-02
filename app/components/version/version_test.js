'use strict';

describe('hseslockers.version module', function() {
  beforeEach(module('hseslockers.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
