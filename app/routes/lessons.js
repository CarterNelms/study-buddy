'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Node.js: Home'});
};

exports.help = (req, res)=>{
  res.render('home/help', {title: 'Node.js: Help'});
};

exports.new = (req,res)=>{
  res.render('user/courses/lesson/new', {title:'Create Course'});
};
