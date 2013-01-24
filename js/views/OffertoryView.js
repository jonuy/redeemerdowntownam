define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/offertory.html'
  ],

  function($, _, Backbone, template) {

    var OffertoryView = Backbone.View.extend({
      el: $('#page-content'),

      render: function() {
        var programData = this.dataModel.get('program');
        var compiledTemplate = _.template(template, programData);
        this.$el.append(compiledTemplate);
      }

    });

    return OffertoryView;
  }
);