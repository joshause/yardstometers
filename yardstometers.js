(function() {

  'use strict';

  var YardsToMeters = function() {};

  YardsToMeters.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x * 0.9144;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = YardsToMeters;
    } else {
      exports.YardsToMeters = YardsToMeters;
    }
  } else {
    window.YardsToMeters = YardsToMeters;
  }

})();
