'use strict';

exports.index = (req, res)=>{
  res.render('user/index', {title: 'User'});
};

exports.create = (req, res)=>{
  console.log(req.body);
};

exports.login = (req, res)=>{
  console.log(req.query);
};
