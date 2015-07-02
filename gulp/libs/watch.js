(function() {

  module.exports = {
    watch: watch
  };

  function watch() {
    Libs.helpers.logStart("Libs.watch.watch");
    gulpWatch([
      "public/apps/**/*",
      "public/components/**/*",
      "public/views/**/*",
      "public/interfaces/**/*"
    ], function() {
      Libs.taskGroup.compileScripts();
    });
  }

})();