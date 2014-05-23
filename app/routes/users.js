'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.create = (req, res)=>{
  console.log(req.body);
};

exports.login = (req, res)=>{
  console.log(req.query);
};
