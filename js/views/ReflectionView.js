define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/reflectionTemplate.html'
  ],

  function($, _, Backbone, template) {

    var ReflectionView = Backbone.View.extend({
      el: $('#page'),

      initialize: function(data) {
        this.data = data;
      },

      render: function() {
        var compiledTemplate = _.template(template, this.data);
        this.$el.append(compiledTemplate);
      }

    });

    return ReflectionView;
  }
);