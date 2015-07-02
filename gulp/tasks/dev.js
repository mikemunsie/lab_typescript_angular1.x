gulp.task("dev", function () {
  var deferred = Q.defer();
  devEnvironment = true;
  Libs.taskGroup.compileScripts()
    .then(Libs.browserSync.start)
    .then(Libs.watch.watch)
    .then(deferred.resolve);
  return deferred.promise;
});