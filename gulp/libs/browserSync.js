(function() {

  module.exports = {
    start: start
  };

  function start() {
    Libs.helpers.logStart("Libs.browserSync.start");
    var deferred = Q.defer();
    var files = [
      "public/javascripts-min/**/*",
      "*.html"
    ];
    browserSync.init({
      files: files,
      browsers: ["google chrome"],
      injectChanges: true,
      server: {
        baseDir: "./"
      }
    });
    deferred.resolve();
    return deferred.promise;
  }

})();