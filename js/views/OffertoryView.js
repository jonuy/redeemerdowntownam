define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/offertoryTemplate.html'
  ],

  function($, _, Backbone, template) {

    var OffertoryView = Backbone.View.extend({
      el: $('#page'),

      initialize: function(data) {
        this.data = data;
      },

      render: function() {
        var compiledTemplate = _.template(template, this.data);
        this.$el.append(compiledTemplate);
      }

    });

    return OffertoryView;
  }
);