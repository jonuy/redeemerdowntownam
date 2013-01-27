define(
  [
    'jquery',
    'underscore',
    'backbone',
    // Models
    'models/ProgramModel',
    // Views
    'views/GenericImageView',
    'views/LocationView',
    'views/ProgramSectionView',
    // Templates
    'text!templates/benedictionDismissal.html',
    'text!templates/callToWorship.html',
    'text!templates/doxology.html',
    'text!templates/encouragement.html',
    'text!templates/offertory.html',
    'text!templates/openingHymns.html',
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
           GenericImageView,
           LocationView,
           ProgramSectionView,
           // Templates
           benedictionDismissalTemplate,
           callToWorshipTemplate,
           doxologyTemplate,
           encouragementTemplate,
           offertoryTemplate,
           openingHymnsTemplate,
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
        'benedictionDismissal': 'showBenedictionDismissal',
        'callToWorship': 'showCallToWorship',
        'doxology': 'showDoxology',
        'location': 'showLocation',
        'offertory': 'showOffertory',
        'openingHymns': 'showOpeningHymns',
        'passingPeace': 'showPassingPeace',
        'prayerAdoration': 'showPrayerAdoration',
        'prayerConfession': 'showPrayerConfession',
        'prayerThanksgiving': 'showPrayerThanksgiving',
        'encouragement': 'showEncouragement',
        'program': 'showProgram',
        'reflection': 'showReflection',
        'sermon': 'showSermon',
        'welcome': 'showWelcome',
      },
      showProgram: function() {
        var views = [
          new LocationView(),
          new ProgramSectionView({template:reflectionTemplate}),
          new ProgramSectionView({template:openingHymnsTemplate}),
          new ProgramSectionView({template:callToWorshipTemplate}),
          new ProgramSectionView({template:prayerAdorationTemplate}),
          new ProgramSectionView({template:doxologyTemplate}),
          new ProgramSectionView({template:prayerConfessionTemplate}),
          new GenericImageView({section:'confessional_response'}),
          new ProgramSectionView({template:encouragementTemplate}),
          new GenericImageView({section:'post_confessional'}),
          new ProgramSectionView({template:passingPeaceTemplate}),
          new ProgramSectionView({template:welcomeTemplate}),
          new ProgramSectionView({template:sermonTemplate}),
          new ProgramSectionView({template:offertoryTemplate}),
          new ProgramSectionView({template:prayerThanksgivingTemplate}),
          new GenericImageView({section:'closing_hymn'}),
          new ProgramSectionView({template:benedictionDismissalTemplate}),
        ];
        this.changePage(views);
      },
      showBenedictionDismissal: function() {
        var views = [
          new ProgramSectionView({template:benedictionDismissalTemplate})
        ];
        this.changePage(views);
      },
      showCallToWorship: function() {
        var views = [
          new ProgramSectionView({template:callToWorshipTemplate})
        ];
        this.changePage(views);
      },
      showDoxology: function() {
        var views = [
          new ProgramSectionView({template:doxologyTemplate})
        ];
        this.changePage(views);
      },
      showEncouragement: function() {
        var views = [
          new ProgramSectionView({template:encouragementTemplate})
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
      showOpeningHymns: function() {
        var views = [
          new ProgramSectionView({template:openingHymnsTemplate})
        ];
        this.changePage(views);
      },
      showPassingPeace: function() {
        var views = [
          new ProgramSectionView({template:passingPeaceTemplate})
        ];
        this.changePage(views);
      },
      showPrayerAdoration: function() {
        var views = [
          new ProgramSectionView({template:prayerAdorationTemplate})
        ];
        this.changePage(views);
      },
      showPrayerConfession: function() {
        var views = [
          new ProgramSectionView({template:prayerConfessionTemplate})
        ];
        this.changePage(views);
      },
      showPrayerThanksgiving: function() {
        var views = [
          new ProgramSectionView({template:prayerThanksgivingTemplate})
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
      showWelcome: function() {
        var views = [
          new ProgramSectionView({template:welcomeTemplate})
        ];
        this.changePage(views);
      },
      changePage: function(views) {
        // Empty contents of page before rendering new views
        $('#page-content').empty();
      
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
            {marginLeft: '-400px'},
            0,
            //set to 0 so menu disappears instantly
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

      // Clicking on header will scroll to top
      $('#header h1').click(function() {
        $('body').scrollTop(0);
      })

      // TODO: dynamically generate menu items, pages, and order
      var menuItems = [
        {'program': 'ALL'},
        {'location': 'Location'},
        {'reflection': 'Reflection'},
        {'openingHymns': 'Opening Hymns'},
        {'callToWorship': 'Call To Worship'},
        {'prayerAdoration': 'Prayer of Adoration'},
        {'doxology': 'Doxology'},
        {'offertory': 'Offertory'},
        {'prayerConfession': 'Prayer of Confession'},
        {'encouragement': 'Words of Encouragement'},
        {'passingPeace': 'Passing of the Peace'},
        {'welcome': 'Welcome & Announcements'},
        {'sermon': 'Sermon'},
        {'offertory': 'Offertory'},
        {'prayerThanksgiving': 'Prayer of Thanksgiving'},
        {'benedictionDismissal': 'Benediction & Dismissal'},
      ];
      var menuList = $('#menu-list');
      for(var i = 0; i < menuItems.length; i++) {

        for(var key in menuItems[i]) {
          var route = key;
          var displayName = menuItems[i][key];
        }

        menuList.append('<li><a href="#'+route+'">'+displayName+'</a></li>');
      }
    };

    return {
      initialize: initialize
    };
  }
);