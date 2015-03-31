'use strict';

var React = require('react/addons');

// CSS
// require('../../styles/contribute.css');

var Input = React.createClass({
  onInput: function(event){
    console.log(event.target.value);
  },
  render: function() {

    var style = {
      position: 'relative',
      width: '20%',
      margin: '5px'
    };

    return (
      <input {...this.props} style={style} className='input' onInput={this.onInput}/>
    );
  }
});

module.exports = Input;
