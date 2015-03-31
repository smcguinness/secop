'use strict';

var UnderwoodClientApp = require('./UnderwoodClientApp');
var ContributePage = require('./contribute');
var HomePage = require('./home');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var InputContainer = require('./input/input-container');

var content = document.getElementById('content');

var Routes = (
  <Route handler={UnderwoodClientApp}>
    <Route name="/" handler={HomePage}/>
    <Route name="/input" handler={InputContainer}/>
    <Route name="contribute" handler={ContributePage}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
