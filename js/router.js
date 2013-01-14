define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/LocationView',
    'views/ProgramView',
  ],

  function($, _, Backbone, LocationView, ProgramView) {

    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'showProgram',
        'program': 'showProgram',
        'location': 'showLocation',
      },
      showProgram: function() {
        var programView = new ProgramView();
      },
      showLocation: function() {
        var locationView = new LocationView();
      },
    });

    var initialize = function() {

      var app_router = new AppRouter();

      Backbone.history.start();

      //app_router.navigate('#program', {trigger: true});
    };

    return {
      initialize: initialize
    };
  }
);