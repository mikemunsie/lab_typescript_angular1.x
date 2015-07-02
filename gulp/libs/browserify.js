(function() {

  module.exports = {
    browserified: browserified
  };

  /**
   * New way to run Libs.browserify.browserified in latest gulp versions
   * @return {transform}
   */
  function browserified() {
    return transform(function(filename) {
      var b = browserify(filename);
      return b.bundle();
    });
  }

})();