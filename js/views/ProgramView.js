define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/LocationView',
    'views/ReflectionView',
    'views/AnnouncementsView',
    'views/SermonView',
    'views/OffertoryView',
    'text!templates/programTemplate.html',
  ],

  function($, _, Backbone, LocationView, ReflectionView, AnnouncementsView, SermonView, OffertoryView, programTemplate) {

    var ProgramView = Backbone.View.extend({
      el: $('#page-content'),

      render: function() {
        var locationView = new LocationView();
        locationView.dataModel = this.dataModel;
        locationView.render();

        var programData = this.dataModel.get('program');
        var compiledTemplate = _.template(programTemplate, programData);
        this.$el.append(compiledTemplate);

        var reflectionView = new ReflectionView();
        reflectionView.dataModel = this.dataModel;
        reflectionView.render();

        var announcementsView = new AnnouncementsView();
        announcementsView.dataModel = this.dataModel;
        announcementsView.render();

        var sermonView = new SermonView();
        sermonView.dataModel = this.dataModel;
        sermonView.render();

        var offertoryView = new OffertoryView();
        offertoryView.dataModel = this.dataModel;
        offertoryView.render();
      },
    });

    return ProgramView;
  }
);