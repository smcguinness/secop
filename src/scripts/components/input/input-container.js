'use strict';

var React = require('react/addons');
var _ = require('underscore');
var Input = require('./input');
var ClickAwayable = require('material-ui/src/js/mixins/click-awayable');
var Checkbox = require('material-ui').Checkbox;
var TextField = require('material-ui').TextField;
var Paper = require('material-ui').Paper;

// CSS
// require('../../styles/contribute.css');

var InputContainer = React.createClass({

  mixins: [ClickAwayable],

  getInitialState: function(){
    return {
      descriptionOpen: false
    };
  },

  showDescriptionInput: function(){
    this.setState({descriptionOpen: !this.state.descriptionOpen});
  },

  componentClickAway: function(){
    this.setState({descriptionOpen: false});
  },

  searchCPT: _.debounce(function(input){
    Dispatcher.dispatchAction(Dispatcher.ActionTypes.SEARCH_FOR_CPT, input);
  }, 400),

  searchCPTCodes: function(event){
    console.log(event.target.value);
    this.searchCPT(event.target.value);
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
              onChange={this.searchCPTCodes}
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
