define(
  [
    'jquery',
    'underscore',
    'backbone',
    'router',
    'jquerymobile',
  ],
  function($, _, Backbone, Router) {
    var initialize = function() {
      // Prevents all anchor click handling
      $.mobile.linkBindingEnabled = false;

      // Disabling this will prevent jQuery Mobile from handling hash changes
      $.mobile.hashListeningEnabled = false;

      Router.initialize();
    };

    return {
      initialize: initialize
    };
  }
);