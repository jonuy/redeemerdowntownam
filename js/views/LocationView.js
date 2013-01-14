define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/whereIsServiceTemplate.html',
  ],

  function($, _, Backbone, locationTemplate) {

    var LocationView = Backbone.View.extend({
      el: $('#page'),

      initialize: function() {
        this.render();
      },

      render: function() {
        data = {
          time: '9:30 AM',
          location_address: '135 W. 18th Street (between 6th and 7th Aves.)',
          location_name: 'The Carriage House',
        };

        var compiledTemplate = _.template(locationTemplate, data);
        this.$el.append(compiledTemplate);
      },

    });

    return LocationView;
  }
);