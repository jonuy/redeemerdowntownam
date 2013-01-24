define(
  [
    'jquery',
    'underscore',
    'backbone',
    // Models
    'models/ProgramModel',
    // Views
    'views/LocationView',
    'views/ProgramSectionView',
    // Templates
    'text!templates/benedictionDismissal.html',
    'text!templates/callToWorship.html',
    'text!templates/doxology.html',
    'text!templates/encouragement.html',
    'text!templates/offertory.html',
    'text!templates/passingPeace.html',
    'text!templates/prayerAdoration.html',
    'text!templates/prayerConfession.html',
    'text!templates/prayerThanksgiving.html',
    'text!templates/reflection.html',
    'text!templates/sermon.html',
    'text!templates/welcomeAnnouncements.html',
    'text!templates/whereIsService.html',
  ],

  function($, _, Backbone, 
           // Models
           ProgramModel,
           // Views
           LocationView,
           ProgramSectionView,
           // Templates
           benedictionDismissalTemplate,
           callToWorshipTemplate,
           doxologyTemplate,
           encouragementTemplate,
           offertoryTemplate,
           passingPeaceTemplate,
           prayerAdorationTemplate,
           prayerConfessionTemplate,
           prayerThanksgivingTemplate,
           reflectionTemplate,
           sermonTemplate,
           welcomeTemplate,
           whereIsServiceTemplate) {

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
        var views = [
          new ProgramSectionView({template:welcomeTemplate})
        ];
        this.changePage(views);
      },
      showLocation: function() {
        var views = [
          new LocationView()
        ];
        this.changePage(views);
      },
      showOffertory: function() {
        var views = [
          new ProgramSectionView({template:offertoryTemplate})
        ];
        this.changePage(views);
      },
      showProgram: function() {
        var views = [
          new LocationView(),
          new ProgramSectionView({template:reflectionTemplate}),
          new ProgramSectionView({template:callToWorshipTemplate}),
          new ProgramSectionView({template:prayerAdorationTemplate}),
          new ProgramSectionView({template:doxologyTemplate}),
          new ProgramSectionView({template:prayerConfessionTemplate}),
          new ProgramSectionView({template:encouragementTemplate}),
          new ProgramSectionView({template:passingPeaceTemplate}),
          new ProgramSectionView({template:welcomeTemplate}),
          new ProgramSectionView({template:sermonTemplate}),
          new ProgramSectionView({template:offertoryTemplate}),
          new ProgramSectionView({template:prayerThanksgivingTemplate}),
          new ProgramSectionView({template:benedictionDismissalTemplate}),
        ];
        this.changePage(views);
      },
      showReflection: function() {
        var views = [
          new ProgramSectionView({template:reflectionTemplate})
        ];
        this.changePage(views);
      },
      showSermon: function() {
        var views = [
          new ProgramSectionView({template:sermonTemplate})
        ];
        this.changePage(views);
      },
      changePage: function(views) {

        var onModelFetched = function(data) {
          views.forEach(function(view) {
            view.dataModel = programModel;
            view.render();
          });
        };

        programModel.fetch({success:onModelFetched});
      }
    });

    var initialize = function() {

      var app_router = new AppRouter();

      Backbone.history.start();

      var menuNav = $('#menu-nav');
      $('#menu-button').on('click', function() {
        if (isMenuOpen == true) {
          menuNav.animate(
            {marginLeft: '-165px'},
            300,
            function() {
              isMenuOpen = false;
            }
          );
        }
        else {
          menuNav.animate(
            {marginLeft: '0'},
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