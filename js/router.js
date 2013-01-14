define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/ProgramView',
  ],

  function($, _, Backbone, ProgramView) {

    var AppRouter = Backbone.Model.extend({
      routes: {
        '*': 'showProgram',
      },
    });

    var initialize = function() {

      var app_router = new AppRouter();

      app_router.on('route:showProgram', function() {
        var programView = new ProgramView();
        programView.render();
      });

      Backbone.history.start();
    };

    return {
      initialize: initialize
    };
  }
);