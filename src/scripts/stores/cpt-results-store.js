'use strict';

var Backbone = require('backbone');
var Dispatcher = require('../app-dispatcher');
var CPTSearchActions = require('../actions/cpt-search-action');

var CPTResultsStore = Backbone.Model.extend({

  initialize: function() {
    this.dispatchToken = Dispatcher.register(this.onDispatched.bind(this));
  },

  onDispatched: function(action) {

    var pl = action.payload;

    switch (action.type) {
      case CPTSearchActions.Types.SEARCH_FOR_CPT:
        $.post('/proxy/cpt/search', { description: pl.search }, function(data){
          console.log(data);
        });
        break;
    }
  }

});

module.exports = new CPTResultsStore();
