var express = require('express');
var app = express();
var apiRouter = require('./proxy-server.js');
var path = require('path');
var port = process.env.PORT || 8080;

app.use(apiRouter);

app.use(express.static(path.join(__dirname + '../dist/assets/')));

app.listen(port, function(){
  console.log("listening on" + port);
});