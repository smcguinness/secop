var express = require('express');
var router = express.Router();
var request = require('request');

var apiUrl = 'http://192.168.1.213:8080';

router.route('/proxy/*')
  .all(function(req, res) {
    var url = req.url.replace('/proxy', apiUrl);
    console.log('url:', url);
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
