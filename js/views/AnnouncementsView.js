define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/welcomeAnnouncements.html'
  ],

  function($, _, Backbone, template) {

    var AnnouncementsView = Backbone.View.extend({
      el: $('#page-content'),

      render: function() {
        var programData = this.dataModel.get('program');
        var compiledTemplate = _.template(template, programData);
        this.$el.append(compiledTemplate);
      }

    });

    return AnnouncementsView;
  }
);