define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/ProgramModel',
    'views/LocationView',
    'views/ReflectionView',
    'views/AnnouncementsView',
    'views/SermonView',
    'text!templates/programTemplate.html',
  ],

  function($, _, Backbone, ProgramModel, LocationView, ReflectionView, AnnouncementsView, SermonView, programTemplate) {

    var programModel = new ProgramModel();

    var ProgramView = Backbone.View.extend({
      el: $('#page'),

      initialize: function() {
        var programView = this;

        var onModelFetched = function(data) {
          var locationView = new LocationView(programModel.get('location'));
          locationView.render();

          programView.render();
        };

        programModel.fetch({success:onModelFetched});
      },

      render: function() {
        var programData = programModel.get('program');

        var compiledTemplate = _.template(programTemplate, programData);
        this.$el.append(compiledTemplate);

        var reflectionView = new ReflectionView(programData);
        reflectionView.render();

        var announcementsView = new AnnouncementsView(programData);
        announcementsView.render();

        var sermonView = new SermonView(programData);
        sermonView.render();
      },
    });

    return ProgramView;
  }
);