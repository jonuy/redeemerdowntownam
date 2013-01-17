define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/whereIsServiceTemplate.html',
  ],

  function($, _, Backbone, template) {

    var LocationView = Backbone.View.extend({
      el: $('#page'),

      render: function() {
        var locationData = this.dataModel.get('location');
        var compiledTemplate = _.template(template, locationData);
        this.$el.append(compiledTemplate);
      },

    });

    return LocationView;
  }
);