'use strict';

var React = require('react/addons');
var Input = require('./input');
var Checkbox = require('./checkbox');

// CSS
// require('../../styles/contribute.css');

var InputContainer = React.createClass({

  getInitialState: function(){
    return {
      descriptionOpen: false
    };
  },

  showDescriptionInput: function(){
    this.setState({descriptionOpen: !this.state.descriptionOpen});
  },

  render: function() {
    
    var style = {
      position: 'relative',
      width: '95%'
    };

    var checkboxStyle = {
      position: 'relative',
      display: 'inline-block',
      width: '20%',
      margin: '5px'
    };

    return (
      <div style={style} className='input-container'>
        <div style={checkboxStyle} className="cpt-box">
          <Checkbox style={{display: 'inline-block'}} placeholder="I Don't Have It" onClick={this.showDescriptionInput} />
          <input style={{width: '90%', display: 'inline-block', marginLeft: '5px'}} placeholder="CPT or Description"/>
        </div>
        <Input placeholder="Cost"/>
        <Input placeholder="Hospital"/>
        <Input placeholder="Doctor"/>
      </div>
    );
  }
});

module.exports = InputContainer;
