'use strict';

var React = require('react/addons');

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
    };

    return (
      <div className='contribute'>
        <p>Please enter a description of medical services rendered ...</p>
        <textarea valueLink={this.linkState('description')} />
        {procedures}
        <button onClick={this._handleAdd}>Add</button>
      </div>
    );
  },

  _handleAdd: function() {
    this.setState({ procedureCount: this.state.procedureCount + 1 });
  }

});

module.exports = ContributePage;
