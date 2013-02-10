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
    'text!templates/communionHymns.html',
    'text!templates/communionPreparation.html',
    'text!templates/confessionFaith.html',
    'text!templates/doxology.html',
    'text!templates/encouragement.html',
    'text!templates/offertory.html',
    'text!templates/openingHymns.html',
    'text!templates/passingPeace.html',
    'text!templates/prayerAdoration.html',
    'text!templates/prayerConfession.html',
    'text!templates/prayerPeople.html',
    'text!templates/prayerThanksgiving.html',
    'text!templates/reflection.html',
    'text!templates/sermon.html',
    //'text!templates/welcomeAnnouncements.html',
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
           communionHymnsTemplate,
           communionPreprarationTemplate,
           confessionOfFaithTemplate,
           doxologyTemplate,
           encouragementTemplate,
           offertoryTemplate,
           openingHymnsTemplate,
           passingPeaceTemplate,
           prayerAdorationTemplate,
           prayerConfessionTemplate,
           prayerPeopleTemplate,
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
        // TODO: dynamically build this views array based on data
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
          //new ProgramSectionView({template:prayerPeopleTemplate}),
          new GenericImageView({section:'post_confessional'}),
          new ProgramSectionView({template:passingPeaceTemplate}),
          //new ProgramSectionView({template:welcomeTemplate}),
          new ProgramSectionView({template:sermonTemplate}),
          new ProgramSectionView({template:offertoryTemplate}),
          //new ProgramSectionView({template:confessionOfFaithTemplate}),
          //new ProgramSectionView({template:communionPreprarationTemplate}),
          //new ProgramSectionView({template:communionHymnsTemplate}),
          new ProgramSectionView({template:prayerThanksgivingTemplate}),
          new GenericImageView({section:'closing_hymn'}),
          new ProgramSectionView({template:benedictionDismissalTemplate}),
        ];
        this.changePage(views);

        if (isMenuOpen) {
          toggleNavMenu();
        }
      },
      showBenedictionDismissal: function() {
        $('#benediction').scrollView();
        toggleNavMenu();
      },
      showCallToWorship: function() {
        $('#call-to-worship').scrollView();
        toggleNavMenu();
      },
      showDoxology: function() {
        $('#doxology').scrollView();
        toggleNavMenu();
      },
      showEncouragement: function() {
        $('#words-of-encouragement').scrollView();
        toggleNavMenu();
      },
      showLocation: function() {
        $('#location').scrollView();
        toggleNavMenu();
      },
      showOffertory: function() {
        $('#offertory').scrollView();
        toggleNavMenu();
      },
      showOpeningHymns: function() {
        $('#opening-hymns').scrollView();
        toggleNavMenu();
      },
      showPassingPeace: function() {
        $('#passing-peace').scrollView();
        toggleNavMenu();
      },
      showPrayerAdoration: function() {
        $('#prayer-of-adoration').scrollView();
        toggleNavMenu();
      },
      showPrayerConfession: function() {
        $('#prayer-of-confession').scrollView();
        toggleNavMenu();
      },
      showPrayerThanksgiving: function() {
        $('#prayer-of-thanksgiving').scrollView();
        toggleNavMenu();
      },
      showReflection: function() {
        $('#reflection').scrollView();
        toggleNavMenu();
      },
      showSermon: function() {
        $('#sermon').scrollView();
        toggleNavMenu();
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

    var toggleNavMenu = function() {
      var menuNav = $('#menu-nav');
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
    };

    var initialize = function() {

      var app_router = new AppRouter();

      Backbone.history.start();

      $('#menu-button').on('click', toggleNavMenu);

      // Clicking on header will scroll to top
      $('#header h1').click(function() {
        $('body').scrollTop(0);
      })

      // Custom scroll thing
      $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top - 44
            }, 1000);
        });
      }

      // TODO: dynamically generate menu items, pages, and order
      var menuItems = [
        {'program' : 'ALL'},
        {'location' : 'Location'},
        {'reflection': 'Reflection'},
        {'openingHymns': 'Opening Hymns'},
        {'callToWorship': 'Call To Worship'},
        {'prayerAdoration': 'Prayer of Adoration'},
        {'doxology': 'Doxology'},
        {'offertory' : 'Offertory'},
        {'prayerConfession': 'Prayer of Confession'},
        {'encouragement': 'Words of Encouragement'},
        {'passingPeace': 'Passing of the Peace'},
        // {'welcome': 'Welcome & Announcements'},
        {'sermon': 'Sermon'},
        {'offertory': 'Offertory'},
        {'prayerThanksgiving': 'Prayer of Thanksgiving'},
        {'benedictionDismissal': 'Benediction & Dismissal'},
      ];
      var menuList = $('#menu-list');
      for(var i = 0; i < menuItems.length; i++) {

        for(var key in menuItems[i]) {
          var route = key;
          var id = key;
          var displayName = menuItems[i][key];
        }

        menuList.append('<li><a href="#'+route+'">'+displayName+'</a></li>');
        // TODO: if this works, move onclick to external js file instead
        //menuList.append('<li><div class="" onclick="$(\''+id+'\').scrollView()">'+displayName+'</div></li>');
      }
    };

    return {
      initialize: initialize
    };
  }
);