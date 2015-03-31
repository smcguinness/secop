'use strict';

var React = require('react/addons');
var mui = require('material-ui');

// CSS
require('../../styles/contribute.css');

var ContributePage = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      description: '',
      procedureCount: 1
    };
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log('State:', this.state);
  },

  render: function() {
    var procedures = [];
    for (var i = 0; i < this.state.procedureCount; i++) {
      procedures.push(<p>Procedure ... </p>);
    }
    var styles = {
      'padding-left': '20px'
    };

    return (
      <div style={styles}>
        <p>Please enter a description of medical services rendered ...</p>
        <mui.TextField
          hintText="Description ..."
          multiLine={true}
          valueLink={this.linkState('description')} />
        {procedures}
        <mui.RaisedButton label="Add" primary={true} onClick={this._handleAdd} />
      </div>
    );
  },

  _handleAdd: function() {
    this.setState({ procedureCount: this.state.procedureCount + 1 });
  }

});

module.exports = ContributePage;
