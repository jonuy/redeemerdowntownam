define(
  [
    'jquery',
    'underscore',
    'backbone',
  ],

  function($, _, Backbone) {

    var ProgramSectionView = Backbone.View.extend({
      template: '',

      el: $('#page-content'),

      initialize: function(options) {
        this.template = options.template;
      },

      render: function() {
        var programData = this.dataModel.get('program');
        var compiledTemplate = _.template(this.template, programData);
        this.$el.append(compiledTemplate);
      }

    });

    return ProgramSectionView;
  }
);