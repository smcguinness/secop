'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var UnderwoodClientApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    UnderwoodClientApp = require('components/UnderwoodClientApp.js');
    component = React.createElement(UnderwoodClientApp);
  });

  it('should create a new instance of UnderwoodClientApp', function () {
    expect(component).toBeDefined();
  });
});
