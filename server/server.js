var express = require('express');
var app = express();
var apiRouter = require('./proxy-server.js');
var path = require('path');
var port = process.env.PORT || 8080;

app.use(apiRouter);

app.use(express.static(__dirname + '/../dist'));

// app.get('/', function(req, res){
//   req.send('../dist/index.html');
// });

app.listen(port, function(){
  console.log("listening on" + port);
});