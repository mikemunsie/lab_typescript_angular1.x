(function() {

  module.exports = {
    compile: compile
  };

  function compile() {
    var deferred = Q.defer();
    Libs.helpers.logStart("Libs.typescript.compile");
    gulp.src([
      "./public/apps/**/*",
      "./public/components/**/*",
      "./public/interfaces/**/*"
    ], { base: "./public/" })
      .pipe(ts({
        typescript: require('typescript'),
        target: "es6"
      }))
      .pipe(gulp.dest('./public/javascripts-min'))
      .on('end', function() {
        Libs.helpers.logEnd("Libs.typescript.compile");
        deferred.resolve();
      });
    return deferred.promise;
  }

})();