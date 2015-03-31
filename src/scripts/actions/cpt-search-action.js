'use strict';

var Dispatcher = require('../app-dispatcher');
var keyMirror = require('react/lib/keyMirror');

var BillActions = {

  Types: keyMirror({
    SEARCH_FOR_CPT: null
  }),

  searchCPTCodes: function(input) {
    Dispatcher.dispatchAction(this.Types.SEARCH_FOR_CPT, {
      input: input
    });
  }

};

module.exports = BillActions;
