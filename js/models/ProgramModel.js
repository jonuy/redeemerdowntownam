define(
  [
    'jquery',
    'underscore',
    'backbone'
  ],

  function($, _, Backbone) {
    var ProgramModel = Backbone.Model.extend({
      url: 'data/02_10_2013.json',
      
      initialize: function() {
      },
    });

    return ProgramModel;
  }
);