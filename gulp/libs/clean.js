(function() {

  module.exports = {
    js: js
  };

  /**
   * Removes all the javascripts-min files in the public folder
   * @return {promise}
   */
  function js() {
    var deferred = Q.defer();
    Libs.helpers.logStart("Libs.clean.js");
    del(["./public/javascripts-min/*"], {
      force: true
    }, function(err) {
      if (err) {
        Libs.helpers.logError(err);
      }
      Libs.helpers.logEnd("Libs.clean.js");
      return deferred.resolve();
    });
    return deferred.promise;
  }

})();