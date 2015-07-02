/// <reference path="../../typings/tsd.d.ts" />

// Dependencies
import "../components/helpers/helpers";

(function() {

  var dependencies = [
    "components_helpers"
  ];

  angular
    .module("app-index", dependencies)
    .controller("indexController", indexController);

  function indexController(components_helpers) {

    var vm = this;

    // ========================================
    // Interface
    // ========================================

    _.extend(vm, {
      name: "Michael Munsie",
      test: components_helpers.test
    });

    _init();

    // ========================================
    // Routines
    // ========================================

    function _init() {
      createUser({
        firstName: "Michael",
        lastName: "Munsie",
        age: 22
      });
    }

    function createUser(user: User) {
      console.log(user);
    }

  }

})();