define(
  [
    'jquery',
    'underscore',
    'backbone',
    'models/ProgramModel',
    'views/AnnouncementsView',
    'views/LocationView',
    'views/OffertoryView',
    'views/ProgramView',
    'views/ReflectionView',
    'views/SermonView',
  ],

  function($, _, Backbone, ProgramModel, AnnouncementsView, LocationView, OffertoryView, ProgramView, ReflectionView, SermonView) {

    // Globals
    window.isMenuOpen = false;

    // Model
    var programModel = new ProgramModel();

    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'showProgram',
        'announcements': 'showAnnouncements',
        'location': 'showLocation',
        'offertory': 'showOffertory',
        'program': 'showProgram',
        'reflection': 'showReflection',
        'sermon': 'showSermon',
      },
      showAnnouncements: function() {
        this.changePage(new AnnouncementsView());
      },
      showLocation: function() {
        this.changePage(new LocationView());
      },
      showOffertory: function() {
        this.changePage(new OffertoryView);
      },
      showProgram: function() {
        this.changePage(new ProgramView());
      },
      showReflection: function() {
        this.changePage(new ReflectionPage());
      },
      showSermon: function() {
        this.changePage(new SermonView());
      },
      changePage: function(view) {

        var onModelFetched = function(data) {
          view.dataModel = programModel;
          view.render();
        };

        programModel.fetch({success:onModelFetched});
      }
    });

    var initialize = function() {

      var app_router = new AppRouter();

      Backbone.history.start();

      var pageDiv = $('#page');
      pageDiv.live('swipeleft', function() {
        if (isMenuOpen == true) {
          pageDiv.animate(
            {marginLeft: '0'},
            300,
            function() {
              isMenuOpen = false;
            }
          );
        }
      });

      pageDiv.live('swiperight', function() {
        if (isMenuOpen == false) {
          pageDiv.animate(
            {marginLeft: '225px'},
            300,
            function() {
              isMenuOpen = true;
            }
          );
        }
      });
    };

    return {
      initialize: initialize
    };
  }
);