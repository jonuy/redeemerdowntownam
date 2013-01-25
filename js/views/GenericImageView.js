define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/genericImage.html',
  ],

  function($, _, Backbone, template) {

    var GenericImageView = Backbone.View.extend({
      section: '',

      el: $('#page-content'),

      initialize: function(options) {
        this.section = options.section;
      },

      render: function() {
        var programData = this.dataModel.get('program');
        var sectionData = programData[this.section];
        var compiledTemplate = _.template(template, sectionData);
        this.$el.append(compiledTemplate);
      },

    });

    return GenericImageView;
  }
);