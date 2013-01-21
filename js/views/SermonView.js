define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/sermonTemplate.html'
  ],

  function($, _, Backbone, template) {

    var SermonView = Backbone.View.extend({
      el: $('#page-content'),

      render: function() {
        var programData = this.dataModel.get('program');
        var compiledTemplate = _.template(template, programData);
        this.$el.append(compiledTemplate);
      }

    });

    return SermonView;
  }
);