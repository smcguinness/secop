var express = require('express');
var router = express.Router();
var request = require('request');


router.route('/proxy/*')
  .all(function(req, res){
    var url = req.url.replace('/proxy', 'https://sec-op-api.herokuapp.com');
    console.log(url)
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