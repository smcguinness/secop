'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.less');

var UnderwoodClientApp = React.createClass({
  render: function() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = UnderwoodClientApp;
