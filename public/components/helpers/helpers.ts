/**
 * Helpers Component
 *
 * The purpose of the helpers component is to provide globally
 * accessable helper routines in our project.
 */

(function() {

  var dependencies = [];

  angular
    .module("components_helpers", dependencies)
    .factory("components_helpers", Helpers);

  function Helpers() {

    // ========================================
    // Interface
    // ========================================

    return {
      test: test
    };

    // ========================================
    // Methods
    // ========================================

    function test() {
      alert("This is a test")
    }

  }

})();