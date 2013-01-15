define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],

  function($, _, Backbone) {
    var ProgramModel = Backbone.Model.extend({
      url: 'data/test.json',
      
      initialize: function() {
      },
    });

    return ProgramModel;
  }
);