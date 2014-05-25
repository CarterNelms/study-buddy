'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.index = (req, res)=>{
  res.render('user/index', {title: 'User'});
};

exports.create = (req, res)=>{
  var user = new User(req.body);
  user.create(user=>{
    console.log(user);
    res.redirect('/portal');
  });
};

exports.login = (req, res)=>{
  var user = new User(req.query);
  user.login(u=>{
    if(u){
      console.log('****************************');
      console.log(u);
      console.log('****************************');
      req.session.userId = u._id;
      res.redirect('/user');
    }else{
      req.session.userId = null;
      res.redirect('/portal');
    }
  });
};
