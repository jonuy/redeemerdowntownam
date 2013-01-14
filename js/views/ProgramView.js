define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/programTemplate.html',
  ],

  function($, _, Backbone, programTemplate) {

    var ProgramView = Backbone.View.extend({
      el: $('#container'),

      render: function() {
        this.$el.html(programTemplate);

        // TODO: use multiple Views to render different sections of the screen
      },
    });

    return ProgramView;
  }
);