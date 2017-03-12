var express = require('express');
var Router = new express.Router();

Router.route('/')
  .get(function(req, res){
    res.json({message: "I NEED WINE"})
});

module.exports = Router;
