(function() {

  'use strict';

  var YardsToMeters = require('../yardstometers.js');

  describe('yardstometers.js', function() {

    it('is a thing', function() {
      expect(YardsToMeters).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of meters for number of yards given', function() {

        var ytm = new YardsToMeters();
        var input = 1;
        var output = 0.9144;

        expect(
          ytm.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

})();
