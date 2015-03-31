'use strict';

var React = require('react/addons');
var Input = require('./input');
var Checkbox = require('material-ui').Checkbox;
var TextField = require('material-ui').TextField;
var Paper = require('material-ui').Paper;

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

    var dropDown;

    var classes = React.addons.classSet({
      'cpt-dropdown': true,
      'is-open': this.state.descriptionOpen
    });

    return (
      <div className='input-container'>
        <div className = "cpt-box">
          <TextField
            hintText="CPT"
            floatingLabelText="CPT" />
          <Checkbox
            onCheck={this.showDescriptionInput}
            name="noCPT"
            label="I Don't Have My CPT" />
          <Paper className={classes}>
            <TextField
              hintText="X-Ray, MRI, Anal Probe..."
              floatingLabelText="Description of Procedure" />
          </Paper>
        </div>
        <TextField
          hintText="Cost"
          floatingLabelText="Cost" />
        <TextField
          hintText="Hospital"
          floatingLabelText="Hospital" />
        <TextField
          hintText="Doctor"
          floatingLabelText="Doctor" />
      </div>
    );
  }
});

module.exports = InputContainer;
