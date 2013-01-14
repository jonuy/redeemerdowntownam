require.config({
  paths: {
    backbone: 'libs/backbone/backbone-0.9.9',
    jquery: 'libs/jquery/jquery-1.8.3',
    underscore: 'libs/underscore/underscore-1.4.3',
    templates: '../templates',
  }
});

require(
  [
    'app',
  ],
  function(App) {
    App.initialize();
  }
);