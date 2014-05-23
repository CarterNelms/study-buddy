'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.portal = (req, res)=>{
  res.render('home/portal', {title: 'User Portal'});
};
