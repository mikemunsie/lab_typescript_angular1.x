(function() {

  module.exports = {
    compileScripts: compileScripts
  };

  function compileScripts() {
    Libs.helpers.logStart("Libs.taskGroup.compileScripts");
    var deferred = Q.defer();
    Libs.clean.js()
      .then(Libs.typescript.compile)
      .then(Libs.transpiler.compile)
      .then(Libs.uglify.compile)
      .then(deferred.resolve);
    return deferred.promise;
  }

})();