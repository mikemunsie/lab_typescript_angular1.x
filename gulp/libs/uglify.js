(function() {

  module.exports = {
    compile: compile
  };

  function compile() {
    Libs.helpers.logStart("Libs.uglify.compile");
    var deferred = Q.defer();
    gulp.src(Paths.javascriptsMin + "**/*.js")
      .pipe(plumber(function(err) {
        Libs.helpers.showError(err);
        return deferred.resolve();
      }))
      .pipe(gulpif(!devEnvironment, uglify({
        mangle: false
      })))
      .pipe(gulp.dest(Paths.javascriptsMin))
      .on("end", function() {
        deferred.resolve();
      });
    return deferred.promise;
  }

})();