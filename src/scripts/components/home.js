'use strict';
var Router = require('react-router');
var React = require('react/addons');
var mui = require('material-ui');

// CSS
require('../../styles/home.css');

var HomePage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  render: function() {
    return (
      <div className='home'>
        <div className='hero'>
          <input type="text" name="search" placeholder="Search Treatments" />
          <input type="submit" name="submit" />
        </div>
        <div className='contribute'>
          <h2>Start Helping Others</h2>
          <mui.RaisedButton label='Anonymously Contribute' onClick={this.clickContribute}/>
        </div>
        <div className='why'>
          <h2>Why Are We Doing This?</h2>
          <p>Simply put to bring the power to the people. To help bring transparency to healthcare.</p>
        </div>
      </div>
    );
  },

  clickContribute: function(e){
      this.transitionTo('contribute');
    }

});

module.exports = HomePage;
