'use strict';

var Dispatcher = require('flux').Dispatcher;
var _ = require('underscore');

var AppDispatcher = _.extend(new Dispatcher(), {

  dispatchAction: function(type, payload) {
    this.dispatch({
      type: type,
      payload: payload
    });
  }

});

module.exports = AppDispatcher;
