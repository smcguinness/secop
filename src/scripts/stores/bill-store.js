'use strict';

var Backbone = require('backbone');
var Dispatcher = require('../app-dispatcher');
var BillActions = require('../actions/bill-actions');

var BillStore = Backbone.Model.extend({

  initialize: function() {
    this.dispatchToken = Dispatcher.register(this.onDispatched.bind(this));
  },

  onDispatched: function(action) {

    var pl = action.payload;

    switch (action.type) {
      case BillActions.Types.ADD_BILL:
        console.log('bill add:', pl.changes);
        // this.getAccount().save(pl.changes, { error: onAccountSaveError });
        break;
    }
  }

});

module.exports = new BillStore();
