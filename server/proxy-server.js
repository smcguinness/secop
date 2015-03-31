var express = require('express');
var router = express.Router();
var request = require('request');

var apiUrl = 'http://192.168.1.213:8080';

router.route('/proxy/*')
  .all(function(req, res){
    var url = req.url.replace('/proxy', 'https://sec-op-api.herokuapp.com');
    req.pipe(request({
      url: url,
      method: req.method,
      body: req.body,
      json: true
    }, function(error, response, body){
      if (error) throw error;
    })).pipe(res, {end: true});
  });

module.exports = router;
