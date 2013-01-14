define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/ProgramView',
  ],

  function($, _, Backbone, ProgramView) {

    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'showProgram',
        'program': 'showProgram',
      },
      showProgram: function() {
        var programView = new ProgramView();
        programView.render();
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