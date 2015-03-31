'use strict';

var Dispatcher = require('../app-dispatcher');
var keyMirror = require('react/lib/keyMirror');

var BillActions = {

  Types: keyMirror({
    ADD_BILL: null
  }),

  addBill: function(changes) {
    Dispatcher.dispatchAction(this.Types.ADD_BILL, {
      changes: 'test'
    });
  }

};

module.exports = BillActions;
