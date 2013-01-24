define(
  [
    'jquery'
  ],
  function($) {
    $(document).bind("mobileinit", function() {
      // Disable jQM routing handling
      $.mobile.ajaxEnabled = false;
      $.mobile.linkBindingEnabled = false;
      $.mobile.hashListeningEnabled = false;
      $.mobile.pushStateEnabled = false;
      // Attempt to prevent jQM loading message from showing
      $.mobile.loadingMessage = '';
    });
  }
);