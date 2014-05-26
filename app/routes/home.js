'use strict';

exports.index = (req, res)=>{
  var userId = req.session.userId;
  res.render('home/index', {userId: userId, title: 'Node.js: Home'});
};
exports.about = (req,res)=>{
  res.render('home/about', {title: 'About Page'});
};
exports.portal = (req, res)=>{
  res.render('home/portal', {title: 'User Portal'});
};
