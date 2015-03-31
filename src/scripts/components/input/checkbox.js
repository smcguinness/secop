'use strict';

var React = require('react/addons');
var Input = require('./input');

// CSS
// require('../../styles/contribute.css');

var Checkbox = React.createClass({

  render: function() {
    
    var style = {
      position: 'relative',
      width: '95%'
    };

    return (
      <input style={this.props.style} onChange={this.props.onClick} type="checkbox" name="vehicle" value="Bike" />
    );
  }
});

module.exports = Checkbox;
