(function() {

  module.exports = {
    compile: compile
  };

  function compile() {
    var deferred = Q.defer();
    Libs.helpers.logStart("Libs.transpiler.compile");
    gulp.src(Paths.javascriptsMin + "**/*.js")
      .pipe(plumber(function(err){
        Libs.helpers.showError(err);
        return deferred.resolve();
      }))
      .pipe(moduleTranspile({
        formatter: 'bundle'
      }))
      .pipe(gulp.dest("./"))
      .on("end", function() {
        Libs.helpers.logEnd("Libs.transpiler.compile");
        deferred.resolve();
      });
    return deferred.promise;
  }

})();