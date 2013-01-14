define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/LocationView',
    'text!templates/programTemplate.html',
  ],

  function($, _, Backbone, LocationView, programTemplate) {

    var ProgramView = Backbone.View.extend({
      el: $('#page'),

      initialize: function() {
        var locationView = new LocationView();
        
        this.render();
      },

      render: function() {
        this.$el.append(programTemplate);


        // TODO: use multiple Views to render different sections of the screen
      },
    });

    return ProgramView;
  }
);